<template>
  <div id="background">
     <br>
      <div id='Innerpage'>
             <div id='description'> 
            <h1> recyclABLE</h1>
            <p>Your 1 stop Recycling Buddy!</p>
             <img class='logo' :src="require(`../../assets/logo.png`)"/> 
          </div>
        
          

        <div id='right-content'>
        
            <div class='avatar'><img  :src="require(`../../assets/avatar.png`)"/> </div>
              <div id="Header"> Welcome Back !</div>
            <div v-if="error" class="error">{{ error.message }}</div>
            <form @submit.prevent="pressed">
              <br />
             
              <div class="email">
                <input type="email" v-model="email" placeholder="email" />
              </div>
              <div class="password">
                <input type="password" v-model="password" placeholder="password" />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        
        </div>
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
  
  margin-left:40%;
  padding-top:20px;
  height:200px;
}
.avatar img{ 
  height:150px;
 

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
#background {
    width: 100%;
    min-width:1400px;
    height:1000px;
    background: #57A890;
}

#right-content {
  background-color: white;
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
  border: none;
  border-bottom: 2px lightgreen;
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
