<template>
  <div id="app">
    <app-header></app-header>
    
    <router-view></router-view>    

    <app-footer></app-footer>
   </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    'app-header':Header,
    'app-footer':Footer
    
  }
}
</script>

<style>
</style>
