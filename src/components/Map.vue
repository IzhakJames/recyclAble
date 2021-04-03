<template>
  <div>
    <section
      class="ui two column centered grid"
      style="position:relative; z-index:1;"
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
                <GmapAutocomplete @place_changed="setPlace" />
                <i
                  class="dot circle link icon"
                  v-on:click="locatorButtonPressed"
                ></i>
              </div>
            </div>
            <button type="button" class="ui button" @click="addMarker">
              GO
            </button>
            <button type="button" class="ui button" @click="drawMarkers">
              E-waste
            </button>
            <button type="button" class="ui button" @click="drawRecycling">
              General Recycling
            </button>
            <button type="button" class="ui button" @click="drawLighting">
              Lighting-waste
            </button>
            <div class="loader" v-show="load"></div>
          </div>
        </form>
      </div>
    </section>
    <section id="map">
      <GmapMap
        :center="center"
        :zoom="zoom"
        style="position: absolute; top: 70px; right: 0; bottom: 0; left: 0; background-color: #57a890;"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center = m.position"
      /></GmapMap>
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
      error: "",
      spinner: false,
      center: { lat: 1.3521, lng: 103.8198 },
      zoom: 12,
      currentPlace: null,
      markers: [],
      places: [],
      markerFlag: false,
      recyclingFlag: false,
      lightingFlag: false,
      load: false,
    };
  },
  methods: {
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
            console.log(this.address);
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
      this.markers = [];
      const marker = {
        lat: latitude,
        lng: longitude,
      };
      this.markers.push({ position: marker });
    },
    setPlace(place) {
      this.currentPlace = place;
      console.log(place);
    },
    addMarker() {
      if (this.currentPlace) {
        this.markers = [];
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
        this.zoom = 14;
      }
    },
    drawMarkers() {
      if (!this.markerFlag) {
        this.load = true;
        database
          .collection("Locations")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              if (doc.data().category === "ewaste") {
                console.log(doc.data());
                this.markers.push({ position: doc.data().position });
              }
            });
            this.load = false;
          });
        this.markerFlag = true;
      } else {
        this.markers = [];
        this.markerFlag = false;
      }
    },
    drawRecycling() {
      if (!this.recyclingFlag) {
        this.load = true;
        database
          .collection("Locations")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              if (doc.data().category === "general") {
                console.log(doc.data());
                this.markers.push({ position: doc.data().position });
              }
            });
            this.load = false;
          });
        this.recyclingFlag = true;
      } else {
        this.markers = [];
        this.recyclingFlag = false;
      }
    },
    drawLighting() {
      if (!this.lightingFlag) {
        this.load = true;
        database
          .collection("Locations")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              if (doc.data().category === "lightingwaste") {
                console.log(doc.data());
                this.markers.push({ position: doc.data().position });
              }
            });
            this.load = false;
          });
        this.lightingFlag = true;
      } else {
        this.markers = [];
        this.lightingFlag = false;
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

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
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
