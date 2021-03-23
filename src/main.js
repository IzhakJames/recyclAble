import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routescomp from './routes.js'
import axios from "axios"
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$axios = axios


const myRouter =  new VueRouter({
  routes:Routescomp,
  mode:'history'
})

myRouter.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
})

let app;
firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  if (!app) {
    app = new Vue({render: h => h(App),router:myRouter}).$mount('#app')
  }
})
// new Vue({
//   render: h => h(App),
//   router:myRouter
// }).$mount('#app')
