<template>
  <div>
    <header>
      <h1>{{ msg }}</h1>
      <div id="link">
        <router-link to="/signup" exact v-if="loggedOut">Sign Up</router-link>
        <router-link to="/login" exact v-if="loggedOut">Login</router-link>
        <button v-else v-on:click="signOut">Logout</button>
      </div>
    </header>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedOut = false;
        this.$router.push({ name: "Home" });
      } else {
        this.loggedOut = true;
      }
    });
  },
  data() {
    return {
      msg: "recyclABLE",
      loggedOut: true,
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace("/login");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  line-height: 20px;
  width: 100%;
  background-color: #255029;
  font-size: 20px;
  height: 50px;
}
h1 {
  margin-left: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 15px;
  color: #ffffff;
  float: left;
  width: 10%;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
}

#link {
  height: 20px;
  margin-top: 18px;
  font-size: 20px;
  width: 200px;
  float: right;
}
</style>
