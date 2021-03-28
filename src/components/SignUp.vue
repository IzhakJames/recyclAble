<template>
  <div id="background">
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      <br />
      Sign Up
      <div class="name">
        <input type="text" v-model="fullName" placeholder="Full Name" />
      </div>
      <div class="email">
        <input type="email" v-model="email" placeholder="Email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <div class="password">
        <input
          type="password"
          v-model="repeatPassword"
          placeholder="Repeat Password"
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import database from "../firebase.js";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      uid: "",
      fullName: "",
      email: "",
      password: "",
      repeatPassword: "",
      error: "",
    };
  },
  methods: {
    pressed() {
      if (this.password === this.repeatPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log(firebase.auth().currentUser.uid);
            this.uid = firebase.auth().currentUser.uid;
            database
              .collection("Users")
              .doc(this.uid)
              .set({
                email: this.email,
                fullName: this.fullName,
                password: this.password,
                pointsRedeemed: 0,
                rewardsRedeemed: [],
                recyclingTripCounter: 0,
                RecyclingHistory: [],
              })
              .then(() => console.log("successfully added to datase"));
            alert("Successfully registered! Welcome!");
            this.$router.push({ name: "Home" });
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        alert("Passwords not the same");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
  font-size: 18px;
}

input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}

button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}

#background {
  background: url(../assets/RecycleBg.png);
  width: 100vw;
  height: 100vh;
  background-size: cover;
  text-align: center;
}

form {
  font-size: 30px;
  color: green;
}

button {
  color: green;
}
</style>
