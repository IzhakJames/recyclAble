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
              Recycling
            </button>
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
      birdPark: { lat: 1.318728, lng: 103.706452 },
      home: { lat: 1.3427323447666637, lng: 103.70637582144454 },
      markerFlag: false,
      recyclingFlag: false,
      ewaste: [
        { position: { lat: 1.3398697505595927, lng: 103.70647666076151 } },
        { position: { lat: 1.344127, lng: 103.707642 } },
        { position: { lat: 1.350142, lng: 103.701351 } },
        { position: { lat: 1.348393, lng: 103.698817 } },
        { position: { lat: 1.341519, lng: 103.69698 } },
        { position: { lat: 1.339423358356876, lng: 103.7053711146369 } },
      ],
      recycling: [
        { position: { lat: 1.342613590866828, lng: 103.70742418511506 } },
        { position: { lat: 1.3433733635314813, lng: 103.70587431879868 } },
      ],
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
        this.markers = this.ewaste;
        this.markerFlag = true;
      } else {
        this.markers = [];
        this.markerFlag = false;
      }
    },
    drawRecycling() {
      if (!this.recyclingFlag) {
        this.markers = this.recycling;
        this.recyclingFlag = true;
      } else {
        this.markers = [];
        this.recyclingFlag = false;
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
</style>
