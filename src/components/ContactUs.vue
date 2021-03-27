<template>
  <div id = "background">
    <div id="rectangle">
        <h1>Ask Us Anything!</h1>
        <p>If you think your item is wrongly classified as recyclable, or if you have any further enquiries related to recycling or our application, please fill up the form below!</p>
        <label id="fnLabel">First Name:</label>
        <input v-show="this.loggedOut" v-model="question.Fname" type="text" id="fname" name="fname" placeholder="First Name">
        <input v-show="!this.loggedOut" v-model="this.question.Fname" type="text" id="fname" name="fname">
        <label id="lnLabel">Last Name:</label>
        <input v-show="this.loggedOut" v-model="question.Lname" type="text" id="lname" name="lname" placeholder="Last Name"><br v-show="this.loggedOut">
        <input v-show="!this.loggedOut" v-model="question.Lname" type="text" id="lname" name="lname"><br>
        <label id="emLabel">Email:</label>
        <input v-show="this.loggedOut" v-model="question.Email" type="text" id="email" name="email" placeholder="Email"><br v-show="this.loggedOut">
        <input v-show="!this.loggedOut" v-model="question.Email" type="text" id="email" name="email"><br>
        <input v-model="question.Question" type="text" id="detail" name="detail" placeholder="Ask your question here!"><br>
        <button v-on:click="sendQuestion()">Submit</button>

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

input {
  border-radius:5px;
  padding:10px;
  border:none;
}

h1 {
    text-align: center;
    font-family: Roboto;
    font-style: italic;
    font-weight: bold;
    font-size: 35px;
    line-height: 53px;
    margin:2% 0% 0% 0%;

}

p {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    padding:5px;
    margin:0%;
}

#background {
  background: url(../assets/RecycleBg.png);
  height:95vh;
  background-color:#57A890;
  min-width:1400px;
  background-size:1530px 830px;
}

#rectangle {
    min-width:700px;
    width: 55%;
    height: 70%;
    margin:5% 25%;
    background: white;
    border-radius: 30px;
    position: absolute;
}

#fname, #lname {
    width: 25%;
    height: 10%;
    margin: 1% 5%;

    background: #E9E9E9;
}

#fnLabel, #lnLabel {
    width: 10%;
    height: 10%;
    margin: 1% -1% 1% 5%;

}

#email {
    width: 77%;
    height: 10%;
    margin: 1% 5%;
    background: #E9E9E9;
}

#emLabel {
    margin: 1% -1% 1% 5%;
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

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    border:none;
    color: #FFFFFF;
}

</style>