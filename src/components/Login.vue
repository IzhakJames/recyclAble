<template>
  <div id="background">
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      <br />
      Log In
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully logged in");
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          alert(error.message);
        });
      // try {
      //   const user = firebase
      //     .auth()
      //     .signInWithEmailAndPassword(this.email, this.password);
      //   console.log(user);
      //   this.$router.push({ name: "Home" });
      // } catch (err) {
      //   console.log(err);
      // }
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
}

form {
  font-size: 30px;
  color: green;
}

button {
  color: green;
}
</style>
