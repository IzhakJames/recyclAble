<template>
  <div id = "background">
        <h1>Recycling Trip Input Form</h1>
        <label>RECYCLING LOCATION:</label><br/>
        <vue-dropdown :config="config" @setSelectedOption="setNewSelectedOption($event)"></vue-dropdown>
        <br/>
        <label>IMAGE OF RECYCLING TRIP:</label>
        <p>Note that timestamp has to be in the image*</p>
        
        <picture-input 
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
        
        <button v-on:click="sendTrip()">Submit</button>

  </div>
</template>

<script>
import VueDropdown from 'vue-dynamic-dropdown'
import database from "../firebase.js";
import PictureInput from 'vue-picture-input'

    export default {
        data: function() {
            return {
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
                },
            }
        },
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
                database.collection('Temp Trip Form').add(tripDetails).then(() => {location.reload(alert("Your trip is submitted successfully."))});

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
        //   to edit again - need to pass user id prop from login to this file
      
            database.collection('TotalCounter').doc('zDNR308gXbNgZkBQs3Gy').get().then((docRef) => { 
                this.newTotal=docRef.data().TotalCounter +1
                database.collection('TotalCounter').doc('zDNR308gXbNgZkBQs3Gy').update({TotalCounter:this.newTotal})
                })  
            database.collection('Users').doc('cJG5lMjs7C90cC0TTNUY').get().then((docRef) => { 
            console.log(docRef.data().Counter)
            this.newCounter=docRef.data().Counter+ 1
            console.log(this.newCounter)
            database.collection('Users').doc('cJG5lMjs7C90cC0TTNUY').update({Counter:this.newCounter})
            alert("Thank You For Your Submission!")

            }).then(
                        () => this.$router.push({path:'/home'})
                    )

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
    width: 40%;
    height: 10%;

    vertical-align: middle;
    background: #FFFFFF;
    border-radius: 30px;
    text-align: center;
    font-family: Roboto;
    font-style: italic;
    font-weight: bold;
    font-size: 35px;
    line-height: 60px;
    margin:2% 30%;

}

p {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    padding:5px;
    margin-top:-10px;
}

#background {
    height:100%;
    background-color:#57A890;
    width: 100%;
    min-width:1400px;
    margin-top: -30px;
}

#fname, #lname {
    width: 38%;
    height: 10%;
    margin: 1% 5%;

    background: #E9E9E9;
}

#email {
    width: 87%;
    height: 10%;
    margin: 1% 5%;

    background: #E9E9E9;
}

#detail {
    width: 87%;
    height: 20%;
    margin: 1% 5%;

    background: #E9E9E9;
}

label {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 41px;
    color: #FFFFFF;
    margin-left: 10px;
}

button { 
    width: 200px;
    height: 50px;
    margin:2% 0% 10% 78%;
    background: #4776EE;
    border-radius: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;

    color: #FFFFFF;

}

</style>