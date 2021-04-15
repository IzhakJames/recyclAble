<template>
   <div>

        <!-- Contributions Card-->
        <div id = "Contribution">
            <div id="Header"> CONTRIBUTIONS </div>
            <div id="Content">
                 <div id='donut-inner'> {{this.percent}}%</div>
                <doughnut></doughnut>
            </div>
      

     
        
           
        </div>

  </div>
</template>

<script>
import database from '../../firebase.js'
import Doughnut from './DoughnutChart.vue'
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: 'Contributions',
  components: {
  Doughnut
  },
  data() {
    return {
      total :0,
      userCounter:0,
      percent:0
    }
  }, methods : {
     route:function(){
        //pass user prop id here
        this.$router.push({ path: '/form' ,name: 'Form'}
        )
    },
       fetchItems:function(){
          //   to edit again - need to pass user id prop from login to this file
          // Total number of recycling trip in the webapp 
            database.collection('Users').doc('Admin').get().then((doc2) => {
          this.total = doc2.data().TotalCounter
        });    
            firebase.auth().onAuthStateChanged(() => {
        
           var uid = firebase.auth().currentUser.uid;
        
           database.collection('Users').doc(uid).get().then((doc) => {
            
              this.userCounter= doc.data().recyclingTripCounter
                this.percent = Number( (this.userCounter /this.total *100).toPrecision(3) )
        })})
        }
  },
    created(){
      this.fetchItems()  
      }

}
</script>

<style scoped>

#donut-inner {
  font-Size:30px;
  margin-left:6%;
  text-align:center;
  padding-top:5%;
  padding-bottom:1%;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:500;
}

#Content {
  margin-top:20px;
  border-radius:20px;
  height:450px;
  width:80%;
  margin-left:10%;
  background:white;
  padding-left:8%;
  margin-right:10%;
  padding-right:5%;
  padding-bottom:5%;


}
#Header {
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 18px;
font-weight: bold;
text-align: center;
border-radius: 30px;
background: #FFFFFF;
margin-top:20px;
margin-left:10%;
width:80%;
padding:5px;

}

</style>