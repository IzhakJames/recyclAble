<template>
  <div id="app">
    <app-header></app-header>

    <app-nav></app-nav>
    
    <router-view></router-view>    

    <app-footer></app-footer>
   </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Navigation from './components/Nav.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
    'app-header':Header,
    'app-footer':Footer,
    "app-nav": Navigation,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-footer {
  bottom:0px;
}
</style>
