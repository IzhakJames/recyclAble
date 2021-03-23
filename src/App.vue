<template>
  <div id="app">
    <app-header></app-header>

<<<<<<< HEAD
    <app-nav></app-nav>
    
    <router-view></router-view>    
=======
    <router-view></router-view>
>>>>>>> 3988d465cf12dab4c14847bb1e872913cd96970a

    <app-footer></app-footer>
  </div>
</template>

<script>
<<<<<<< HEAD
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Navigation from './components/Nav.vue'

=======
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
>>>>>>> 3988d465cf12dab4c14847bb1e872913cd96970a

export default {
  name: "App",
  components: {
    // HelloWorld
<<<<<<< HEAD
    'app-header':Header,
    'app-footer':Footer,
    "app-nav": Navigation,

  }
}
=======
    "app-header": Header,
    "app-footer": Footer,
  },
};
>>>>>>> 3988d465cf12dab4c14847bb1e872913cd96970a
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-footer {
  bottom:0px;
}
</style>
