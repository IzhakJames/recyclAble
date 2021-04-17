<template>
  <div>
    <section
      class="ui two column centered grid"
      style="position:relative; z-index:1; min-width:1400px;"
    >
      <div class="column">
        <form class="ui segment large form" action="">
          <div class="ui message red" v-show="error">{{ error }}</div>
          <div class="ui segment">
            <div class="field">
              <div
                class="ui right icon input large"
                :class="{ loading: spinner }"
              >
                <GmapAutocomplete @place_changed="setPlace" v-on:keydown.enter.prevent="addMarker"/>
                <i
                  class="dot circle link icon"
                  v-on:click="locatorButtonPressed"
                ></i>
              </div>
            </div>
            <button type="button" class="ui button" @click="addMarker">
              GO
            </button>
            <button type="button" class="ui button" v-bind:class="{active: this.option == 'ewaste'}" @click="drawMarkers">
              E-waste
            </button>
            <button type="button" class="ui button" v-bind:class="{active: this.option == 'general'}" @click="drawRecycling">
              General Recycling
            </button>
            <button type="button" class="ui button" v-bind:class="{active: this.option == 'lightingwaste'}" @click="drawLighting">
              Lighting-waste
            </button>
            <div class="loader" v-show="load">
              <p class="loader-text">Loading...<p>
              <div class="loader-circle"></div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <section id="map">
      <GmapMap
        :center="center"
        :zoom="zoom"
        :options="{
   mapTypeControl: false,
   scaleControl: true,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: false,
   disableDefaultUi: false,
   clickableIcons: false
 }"
        style="position: absolute; top: 70px; right: 0; bottom: 0; left: 0; background-color: #57a890;"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in currentPlaceCoord"
          :position="m.position"
          @click="center = m.position"
          :icon="{ url: require('../assets/home.png')}"
      />

        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center = m.position;toggleInfoWindow(m,index)"
      />

      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        <div v-html="infoContent"></div>
      </gmap-info-window>
    </GmapMap>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import database from "../firebase.js";

export default {
  data() {
    return {
      address: "",
      clickStyle:{backgroundColor:"blue"},
      error: "",
      spinner: false,
      center: { lat: 1.3521, lng: 103.8198 },
      zoom: 12,
      currentPlace: null,
      currentPlaceCoord:[],
      markers: [],
      option:'',
      load: false,
      infoContent: 'a',
      infoWindowPos: {
          lat: 0,
          lng: 0
        },
      infoWinOpen: false,
       infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
       },
       currentMidx: null
    };
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
        this.infoWindowPos = marker.position;
        this.infoContent = this.getInfoWindowContent(marker);
        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      },

      getInfoWindowContent: function (marker) {
              return (`<div class="card">
        Street Name: ${(marker.address.streetName == "") ? "N/A" : marker.address.streetName}
        <br>
        Building Name: ${(marker.address.buildingName == "") ? "N/A" : marker.address.buildingName}
        <br>
        Block Number: ${(marker.address.blockNumber == "") ? "N/A" : marker.address.blockNumber}
        <br>
        Postal Code: ${(marker.address.postalCode == "") ? "N/A" : marker.address.postalCode}
        </div>`
        );
      },

    locatorButtonPressed() {
      this.spinner = true;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.getAddressFrom(
              position.coords.latitude,
              position.coords.longitude
            );
            this.showUserLocationOnTheMap(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          () => {
            this.error =
              "Locator is unable to find your address. Please type your location manually";
            this.spinner = false;
          }
        );
      } else {
        this.spinner = false;
        console.log("Your browser does not support geolocation API");
      }
    },
    getAddressFrom(lat, long) {
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=AIzaSyDItXXsDiuvckOpC6MylrNTQ8pNWnOT39E"
        )
        .then((response) => {
          if (response.data.error_message) {
            this.error = response.data.error_message;
          } else {
            this.address = response.data.results[0].formatted_address;
          }
          this.spinner = false;
        })
        .catch((error) => {
          this.spinner = false;
          this.error = error.message;
        });
    },
    showUserLocationOnTheMap(latitude, longitude) {
      this.center = { lat: latitude, lng: longitude };
      this.zoom = 16;
      this.currentPlaceCoord = [];
      const marker = {
        lat: latitude,
        lng: longitude,
      };
      this.currentPlaceCoord.push({position:marker});
    },
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        this.currentPlaceCoord = [];
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.currentPlaceCoord.push({position:marker});
        this.center = marker;
        this.zoom = 14;
      }
    },
    drawMarkers() {
      //Cannot click others when loading
      if (this.load) {
        return;
      }
      if (this.option !== "ewaste") {
        this.markers = [];
        this.option = "ewaste"
        this.load = true;
        database
          .collection("Locations")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              if (doc.data().category === "ewaste") {
                this.markers.push({ position: doc.data().position, address:doc.data().address });
              }
            });
            this.load = false;
          });
      } else {
        this.markers = [];
        this.option = "";
      }
    },
    drawRecycling() {
      //Cannot click others when loading
      if (this.load) {
        return;
      }
      if (this.option !== "general") {
        this.markers = [];
        this.option = "general"
        this.load = true;
        database
          .collection("Locations")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              if (doc.data().category === "general") {
                this.markers.push({ position: doc.data().position, address:doc.data().address });
              }
            });
            this.load = false;
          });
      } else {
        this.markers = [];
        this.option = "";
      }
    },
    drawLighting() {
      //Cannot click others when loading
      if (this.load) {
        return;
      }
      if (this.option !== "lightingwaste") {
        this.markers = [];
        this.option = "lightingwaste"
        this.load = true;
        database
          .collection("Locations")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              if (doc.data().category === "lightingwaste") {
                this.markers.push({ position: doc.data().position, address:doc.data().address});
              }
            });
            this.load = false;
          });
      } else {
        this.markers = [];
        this.option = "";
      }
    },
  },
};
</script>

<style scoped>
.ui.button,
.dot.cirlce.icon {
  background-color: #ff5a5f;
  color: white;
}

.ui.button:hover {
  background-color:lightgreen;
}

.active {
  background-color:green !important;
}

.pac-icon {
  display: none;
}



.pac-item {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.pac-item:hover {
  background-color: white;
}

.pac-item-query {
  font-size: 16px;
}

.loader-circle {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: spin 2s linear infinite;

}

.loader-text {
  text-align:center;
  font-size:30px;
  margin-bottom:0px;
}

.loader {
  position:absolute;
  top:200px;
  margin-left:38%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
