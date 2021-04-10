<template>
  <div id="background">
     
      <div id='Innerpage'>
          
      
           <div id='description'> 
            <h1> recyclABLE</h1>
            <p>Your 1 stop Recycling Buddy!</p>
             <div class='logo'><img  :src="require(`../../assets/logo.png`)"/> </div>
          </div>
        
        <div id='right-content'>
          <!-- <div id='inner-content'> -->
          
              <div id="Header"> Hello Friend !
                <p> Join us to embark on an exciting journey to recycle</p>
              </div>
              <br><br>
           <div v-if="error" class="error">{{ error.message }}</div>
            <form @submit.prevent="pressed">
  
   
                <input type="text" v-model="fullName" placeholder="Full Name" />
              <br>
          
                <input type="email" v-model="email" placeholder="Email" />
          <br>
        
                <input type="password" v-model="password" placeholder="Password" />
          <br>
                <input
                  type="password"
                  v-model="repeatPassword"
                  placeholder="Repeat Password"
                />
  
                <br>
                <button type="submit">Sign Up</button>
              </form>
            </div>
        </div>
    </div>
  <!-- </div> -->
</template>

<script>
import firebase from "firebase/app";
import database from "../../firebase.js";
import "firebase/auth";

export default {
  data() {
    return {
      uid: "",
      fullName: "",
      email: "",
      password: "",
      repeatPassword: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      if (this.password === this.repeatPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
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
              .then(() => {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
              });
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
.logo{
  float:left;
  margin-top:-5%;
  width:150%;
  margin-left:-15%;

}
#description {

  width:30%;
  margin-left:12%;
  float:left;
  margin-top:200px;



}
#description h1 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:70px;
  font-weight: 400;
}
#description p {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:20px;
  font-weight: 200;
}

.avatar {
  width:30%;
  margin-left:35%;
  
}
#Innerpage {
  width: 90%;
  height: 920px;
  margin:0px 5%;
  border-radius: 30px;
  background-image: url("../../assets/loginBg.png");
  background-size: 1800px;
  background-repeat: no-repeat;
 
  background-color: white;
  

}
#Header {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:30px;
  font-weight: 600;
  letter-spacing: 2px; 
  margin-top:5%;
  
}
#Header p{
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:14px;
  font-weight: 600;
  letter-spacing: 2px; 
  margin-top:5%;
  color: #255029;
  
}
#background {
    padding-top:1.5%;
    width: 100%;
    min-width:1400px;
    height:1000px;
    background: #57A890;;
}

#right-content {

  width:45%;
  height: 600px;
  float:right;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-top:100px;
  margin-right:5%;

}

#right-content:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}








.error {
  color: red;
  font-size: 18px;
}

input {
  border: 1px;
  width: 80%;
  padding: 10px;
  margin: 14px;
  font-size: 18px;
  margin-left:10%;
  margin-top:10px;
 
}

button{
	display: block;
	width: 80%;
	height: 50px;
	border-radius: 25px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
	background-size: 200%;
	font-size: 1.2rem;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	margin: 1rem 0;
	cursor: pointer;
	transition: .5s;
  margin-left:10%;
}
button:hover{
	background-position: right;
}



/* form {
  font-size: 30px;
  color: green;
} */


</style>
