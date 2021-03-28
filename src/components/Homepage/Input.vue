<template>
  <div id = "background">
       <div id="Header">Recycling Trip Input Form</div>
       <div id="Content"> 
           <label id="Label-header">RECYCLING LOCATION:</label><br>
        <vue-dropdown :config="config" @setSelectedOption="setNewSelectedOption($event)"></vue-dropdown>
        <br><br>
          <label id="Label-header">IMAGE OF RECYCLING TRIP:</label><br>
        <picture-input id="image"
            ref="pictureInput"
            width="300" 
            height="300" 
            margin="10" 
            accept="image/jpeg,image/png" 
            size="10" 
            button-class="btn"
            :custom-strings="{
                upload: '<h1>Bummer!</h1>',
                drag: 'Drag or upload your image here 😺'
            }"
            @change="onChange">
        </picture-input>

        <button class='button-1' v-on:click="sendTrip();SubmitTrip(); ">SUBMIT</button> 

       </div>
  </div>
</template>

<script>
import database from '../../firebase.js'
import VueDropdown from 'vue-dynamic-dropdown'
import PictureInput from 'vue-picture-input'
import firebase from "firebase/app";
import "firebase/auth";

export default {
    data() {
        return {
            user:[],
            newCounter:0,
            newTotal:0,
            image:"",
            width : window.innerWidth,
            config: {
                options: [
                    {
                        value: "Jurong East"
                    },
                    {
                        value: "Bugis"
                    },
                    {
                        value: "Kent Ridge"
                    },
                ],
                placholder: "Select your location",
                backgroundColor: "white",
                width: this.width,
                newCounter:0,
                newTotal:0
            }
        }
    },
  name: 'Input',
  components: {
      "vue-dropdown": VueDropdown,
      PictureInput
  },
  mounted() {
    this.$nextTick(() => {
    window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },


  methods: {
    setNewSelectedOption(selectedOption) {
        this.config.placeholder = selectedOption.value;
    },
    onResize() {
        this.width = window.innerHeight
    },

    sendTrip () {     
      const tripDetails = {
          image: this.image,
          location: this.config.placeholder    
      }
      database.collection
      database.collection('Temp Trip Form').add(tripDetails).then(() => {});

    },

    onChange (image) {
        console.log('New picture selected!')
        if (image) {
            console.log('Picture loaded.')
            this.image = image
        } else {
            console.log('FileReader API not supported: use the <form>, Luke!')
        }
        
    },
      SubmitTrip: function() {
      //add to the total trip in the Website 
      database.collection('TotalCounter').doc('zDNR308gXbNgZkBQs3Gy').get().then((docRef) => { 
          this.newTotal=docRef.data().TotalCounter +1
          database.collection('TotalCounter').doc('zDNR308gXbNgZkBQs3Gy').update({TotalCounter:this.newTotal})
          })  
      //add to the total trip of user
       firebase.auth().onAuthStateChanged(() => {
        
           var uid = firebase.auth().currentUser.uid;
           console.log(uid)
           database.collection('Users').doc(uid).get().then((doc) => {
              this.user =  doc.data()
              console.log(this.user.recyclingTripCounter)
              this.newCounter= this.user.recyclingTripCounter+1
              this.user.recyclingTripCounter = this.newCounter
              database.collection('Users').doc(uid).update(this.user)
        })})



       database.collection('TotalCounter').doc('zDNR308gXbNgZkBQs3Gy').get().then((docRef) => { 
        this.newTotal=docRef.data().TotalCounter +1
        database.collection('TotalCounter').doc('zDNR308gXbNgZkBQs3Gy').update({TotalCounter:this.newTotal})
       alert("Thank You For Your Submission!")

      }).then(
        () => {location.reload()}  
               )

      }

  }
}
</script>

<style scoped>

.button {
  width: 80%;
  height: 8%;
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  background-color: white;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  font-weight:bold;
}
.button:hover {background-color: #FFFFF0}

.button-1 {
  text-align: center;
  border-radius: 30px;
  border:none;
  padding:7px;
  width:60%;
  margin-top: 5%;
  display: inline-block;
  padding: 15px 25px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  background-color: white;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  font-weight:bold;
  
}

.button-1:hover {background-color: #FFFFF0}

.button-1:active {
  background-color: #FFFFF0 ;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.button:active {
  background-color: #FFFFF0 ;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.input-file {
    height:50px;
    font-size:15pt;
}
.input-box {
    width:80%;
    height:50px;
    font-size:13pt;
}
#Label-header {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 30;
    font-size: 18px;
    line-height: 41px;
    color:white;
    text-align: left;


}

#Content {
    margin-left:5%;
    margin-top:2%;
    padding-top:1%;
    width: 90%;

}
#Header {
    margin-left:5%;
    margin-top:2%;
    padding-top:1%;
    padding-bottom:1%;
    width: 90%;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
    border-radius: 30px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:15px;
    font-weight:bold;



}
#Form {
  float:right;
  height:300px;
  width:50%;
  border-radius:30px;
  background-color:#57A890;
  text-align: center;
  background: #57A890;
  border: 10px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 30px;

}

</style>