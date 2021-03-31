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
                <input
                  type="text"
                  placeholder="Enter your address"
                  v-model="address"
                />
                <i
                  class="dot circle link icon"
                  v-on:click="locatorButtonPressed"
                ></i>
              </div>
            </div>
            <button class="ui button">GO</button>
          </div>
        </form>
      </div>
    </section>
    <section id="map">
      <GmapMap
        :center="{ lat: this.latitude, lng: this.longitude }"
        :zoom="zoom"
        style="position: absolute;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #57a890; "
      ></GmapMap>
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
      latitude: 1.3521,
      longitude: 103.8198,
      zoom: 12,
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
          }
          this.spinner = false;
        })
        .catch((error) => {
          this.spinner = false;
          this.error = error.message;
        });
    },
    showUserLocationOnTheMap(latitude, longitude) {
      this.latitude = latitude;
      this.longitude = longitude;
      this.zoom = 16;
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

/* #map {
  position: absolute;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #57a890;
} */
</style>
