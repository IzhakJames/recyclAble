<template>
  <div id = "background">

    <div id="rectangle">
       <br><br>
          <div id="header">
            <h1> CONTACT US </h1>
              
          </div>
        <div id='content'>
            <div id='left-content'>
               <p>If you think your item is wrongly classified as recyclable, or if you have any further enquiries related to recycling or our application,
                  please feel free to fill up the form below to let us know :)</p>
              <img  :src="require(`../assets/contactusBG2.gif`)"/>
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
#left-content {
  float:left;
  width:35%;
}

#left-content img {
  margin-top:13%;
  margin-left:20%;
  width:350px;
  height:350px;

}
#header {
  width:20%;
  float:left;
  margin-left:-1%;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius:30px;
  padding:4px;
  background-color:#57A890;
}
#header h1 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  background-color: white;
  margin-top:2%;
  padding:3px;
  width:90%;
  border-radius:30px;
  margin-left:5%;
  
}
#header:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

#left-content p {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  margin-top:4%;
  margin-left:10%;
  font-weight: 400;
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
  background: white;
  width: 90%;
  height: 920px;
  margin:0px 5%;
  border-radius: 30px;
}

#content {
  background-color:#f8f8ff;
  height: 580px;
  width: 100%;
  margin-top: 12%;
  padding-top:5%;
}
#right-content {
  background-color:white;
  height: 650px;
  width: 58%;
  float:right;
  margin-top:-8%;
  margin-right:3%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius:10px;
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
    margin: 1% -1% 1% 4%;
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

button { 
    width: 15%;
    height: 8%;
    margin:2% 0% 0% 78%;
    background: #4776EE;
    border-radius: 20px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    border:none;
    color: #FFFFFF;
}

button:hover {
  cursor:pointer;
  background: lightblue;
}

</style>