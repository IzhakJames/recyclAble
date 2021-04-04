<template>
  <div id="app">
    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Template/Header.vue";
import Footer from "./components/Template/Footer.vue";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-footer {
  bottom: 0px;
}
</style>
