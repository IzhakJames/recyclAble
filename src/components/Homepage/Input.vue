<template>
  <div>
      <br>
       <div id="Header">
          <h1> RECYCLING TRIP INPUT FORM</h1>
        </div>
       <br><br>
       <div id="Content"> 
           <label id="Label-header">RECYCLING LOCATION:</label><br>
        <vue-dropdown id='drop-down' :config="config" @setSelectedOption="setNewSelectedOption($event)"></vue-dropdown>
        <br><br>
          <label id="Label-header">IMAGE OF RECYCLING TRIP:</label><br>
     
         <br>
        <div id="image-input">
          <picture-input 
              ref="pictureInput"
              width="400" 
              height="200" 
              margin="5" 
              accept="image/jpeg,image/png" 
              size="1" 
              button-class="btn"
              :custom-strings="{
                  upload: '<h5>Bummer!</h5>',
                  drag: '<h6>Drag or upload your image here!</h6>'
              }"
              @change="onChange">
          </picture-input>
        </div>
         <img class="form-logo" :src="require(`../../assets/form.png`)"/>
        <img class="form-logo-2" :src="require(`../../assets/form2.png`)"/>
        <div id="btn-position"><button class='button-1' v-on:click="sendTrip();SubmitTrip(); ">SUBMIT</button> </div>

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
#btn-position {
  margin-top:5%;
  width:30%;
  margin-left:35%;

}
.form-logo {
  float:right;
  width:36%;
  margin-right:-8%;
  margin-top:-13.5%;

  
}

.form-logo-2 {
  float:left;
  width:35%;
  margin-left:-10%;
  margin-top:-6%;

  
  
}
#image-input {
  width:50%;
  margin-left:25%;
}
#drop-down {
  background-color: lightgray;
  border-radius:10px;
  margin-top:5%;
}
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
  background-color: black;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  font-weight:bold;
}
.button:hover {background-color: #FFFFF0}

.button-1 {
  border-radius: 30px;
  border:none;
  padding:7px;
  width:60%;
  margin-top: 3%;
  display: inline-block;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  background-color:whitesmoke;
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
    font-weight: 500;
    font-size: 16px;
    line-height: 41px;
    color:black;
    float:left;


}

#Content {
    margin-left:5%;
    margin-top:2%;
    padding-top:1%;
    width: 90%;

}
#Header  {
    float:left;
    margin-left:-2%;
    padding-top:1%;
    padding-bottom:1%;
    width:50%;
    background: #57A890;
    border-radius: 30px;
    padding:10px;
   
}
#Header h1 {
    border-radius: 30px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:18px;
    font-weight:500;
    background-color: white;
    padding:5px;
}

</style>