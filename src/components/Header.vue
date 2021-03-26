<template>
  <div>
    <header>
      <img class="logo" :src="require(`../assets/MainLogo.png`)"/>
      <h1>{{ msg }}</h1>
      <div id="link">
        <router-link to="/signup" exact v-if="loggedOut">Sign Up</router-link>
        <router-link to="/login" exact v-if="loggedOut">Login</router-link>
        <button class= 'button' v-else v-on:click="signOut"><span>Logout</span></button>
      </div>
    </header>

    <nav v-show="!loggedOut">
    <div id='navborder'>
      <span v-on:click="moveHome" id='nav-content'>Home</span>
      <span v-on:click="moveMap" id='nav-content'>Map</span>
      <span v-on:click="moveRewards" id='nav-content'>Rewards</span>
      <span v-on:click="moveContact" id='nav-content'>Contact Us</span>
     </div>
    </nav>

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
    moveHome() {
      this.$router.push({ path: "/home" });
    },
    moveRewards() {
      this.$router.push({ path: "/reward" });
    },
    moveContact() {
      this.$router.push({
        path: "/contact_us",
      });
    },
    moveMap() {
      this.$router.push({
        path: "/map",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button {
  display: inline-block;
  border-radius: 4px;
  background-color:green;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
#nav-content{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  color: white;
  text-decoration: none;
  padding-left:2%;
   padding-right:2%;

}


#navborder span:hover{
   background-color: #255029;
   border-radius: 20px;


}

img {
  width: 80px;
  height: 58px;
  float:left;
  margin-left:1%;

}
header {
  line-height: 20px;
  width: 100%;
  min-width: 1400px;
  background-color: #255029;
  font-size: 20px;
  height: 50px;
}
h1 {
  float:right;
  margin-top: 20px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
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

span {
  margin: 0 20px;
}

nav {
  background: rgb(124, 180, 161);
  font-size: 25px;
  padding-top:0.5%;

}
</style>
