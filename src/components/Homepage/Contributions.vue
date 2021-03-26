<template>
   <div>

        <!-- Contributions Card-->
        <div id = "Contribution">
            <div id="Header"> YOUR CONTRIBUTIONS </div>
            <div id='donut-inner'> {{this.percent}}%</div>
            <div id="Content">
              <doughnut></doughnut>
            </div>
      

        <!-- <button class='button' v-on:click="route()"> CLICK TO INPUT TRIP  </button> -->
        
           
        </div>

  </div>
</template>

<script>
import database from '../../firebase.js'
import Doughnut from './DoughnutChart.vue'

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
          database.collection('TotalCounter').doc('zDNR308gXbNgZkBQs3Gy').get().then((docRef) => { 
          this.total=docRef.data().TotalCounter
          console.log(this.total)
          })  
          //User recycling trip --> pass prop here
          database.collection('Users').doc('cJG5lMjs7C90cC0TTNUY').get().then((docRef) => { 
          this.userCounter=docRef.data().Counter
          this.percent = this.userCounter /this.total *100
          })
        }
  },
    created(){
      this.fetchItems()  
      }

}
</script>

<style scoped>
#donut-inner {
  position:absolute;
  margin-Left:150px;
  margin-top:250px;
  font-Size:50px;
}
.button {
  text-align: center;
  border-radius: 30px;
  border:none;
  padding:7px;
  width:60%;
  margin-left:20%;
  margin-top: 10%;
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
.button:hover {background-color: #FFFFF0}

.button:active {
  background-color: #FFFFF0 ;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
#Content {
  margin-top:40px;
  border-radius:20px;
  height:400px;
  width:80%;
  margin-left:10%;
  background:white;
  padding-left:8%;
  padding-right:5%;
  padding-bottom:5%;


}
#Header {
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 25px;
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