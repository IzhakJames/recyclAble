<template>
  <div id="app">
    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
