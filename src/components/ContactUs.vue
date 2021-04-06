<template>
  <div id = "background">

    <div id="rectangle">
   
        
       <br><br>  <br><br>
          <div id='header'> Contact Us</div>
    
  
                <div id='description'> 
            <p>If you think your item is wrongly classified as recyclable, or if you have any further enquiries related to recycling or our application,
                  please feel free to fill up the form below to let us know :)</p>
                <div class='logo'>  <img  :src="require(`../assets/contactusBG2.gif`)"/> </div>
                    </div>
              
       
            <div id='right-content'>
              <br><br> <br><br>
              <label id="fnLabel">First Name:</label>
              <input v-show="this.loggedOut" v-model="question.Fname" type="text" id="fname" name="fname" placeholder="First Name">
              <input v-show="!this.loggedOut" v-model="this.question.Fname" type="text" id="fname" name="fname">
              <label id="lnLabel">Last Name:</label>
              <input v-show="this.loggedOut" v-model="question.Lname" type="text" id="lname" name="lname" placeholder="Last Name"><br v-show="this.loggedOut">
              <input v-show="!this.loggedOut" v-model="question.Lname" type="text" id="lname" name="lname"><br>
              <br><br>
              <label id="emLabel">Email:</label>
              <input v-show="this.loggedOut" v-model="question.Email" type="text" id="email" name="email" placeholder="Email"><br v-show="this.loggedOut">
              <input v-show="!this.loggedOut" v-model="question.Email" type="text" id="email" name="email"><br>
             <br><br>
             <label id="emLabel">Your Queries:</label>
              <input v-model="question.Question" type="text" id="detail" name="detail" placeholder="Ask your question here!"><br>
              <button v-on:click="sendQuestion()">Submit</button>
          </div>
      
  
  
             
       </div>

    
  </div>
</template>

<script>
import database from "../firebase.js"
import firebase from "firebase/app";
import "firebase/auth";

export default {
    data(){
      return{
          question: {
              Fname:'',
              Lname:'',
              Email:'',
              Question:'',
          },
          loggedOut: true,
          thisUser: {},
        }
    },

    created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedOut = false;
        var uid = firebase.auth().currentUser.uid;
        database.collection('Users').doc(uid).get().then((doc) => {
            if (doc.exists) {
              this.thisUser = doc.data();
              var fullName =  doc.data().fullName.split(/\s+/);
              this.question.Fname = fullName[0];
              this.question.Lname = fullName[1];
              this.question.Email = doc.data().email;
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
      } else {
        this.loggedOut = true;
      }
    });    
  },


  methods: {
    sendQuestion:function(){      
        database.collection('Questions').add(this.question).then(() => {location.reload(alert("Your question is submitted successfully. Our team will respond within 3 working days."))});
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo {
  width:100%;

}


#description {

  width:30%;
  margin-left:10%;
  float:left;
  margin-top:150px;



}
#description p {
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;

  margin-left:-5%;
  font-weight: 400;
  text-align: center;
  letter-spacing: 2px; 
}




#header  {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  padding:3px;
  width:90%;
  border-radius:30px;
  margin-left:5%;
  text-align: center;
  letter-spacing: 3px; 

  
}



input {
  border-radius:5px;
  padding:10px;
  border:none;
}



#background {
    padding-top:1.5%;
    width: 100%;
    min-width:1400px;
    height:1000px;
    background: #57A890;
}

#rectangle {

  width: 90%;
  height: 920px;
  margin:0px 5%;
  border-radius: 30px;
  background-image: url("../assets/loginBg.png");
  background-size: 1800px;
  background-repeat: no-repeat;
  background-color: white;
 

}


#right-content {
  background-color:white;
  height: 650px;
  width: 50%;
  float:right;
  margin-top:100px;
  padding-left:1%;
  margin-right:3%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius:30px;
}
#right-content:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}


#fname, #lname {
    width: 25%;
    height: 10%;
    margin: 1% 5%;
    background: #E9E9E9;
}

#fnLabel, #lnLabel {
    width: 4%;
    height: 10%;
    margin: 1% -1% 1% 2%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    font-weight:500;
}

#email {
    width: 77%;
    height: 10%;
    margin: 1% 5%;
    background: #E9E9E9;
    
}

#emLabel {
    margin: 1% -1% 1% 5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    font-weight:500;
}

#detail {
    width: 87%;
    height: 20%;
    margin: 1% 5%;
    background: #E9E9E9;
}


button{
	display: block;
	width: 25%;
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
  float:right;
  margin-right: 8%;

}
button:hover{
	background-position: right;
}

</style>