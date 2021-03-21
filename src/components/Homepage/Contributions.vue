<template>
   <div>

        <!-- Contributions Card-->
        <div id = "Contribution">
            <div id="Header"> 
              <h1> YOUR CONTRIBUTIONS</h1>
            <div id="Content">
              <doughnut></doughnut>
              <div id='donut-inner'> 
                 <h2>{{this.percent}}%</h2>
              </div>
            </div>
            </div>
        <button class='button' v-on:click="route()"> CLICK TO INPUT TRIP  </button>
        
           
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
    width: 100%;
    height: 5%;
    top: 30%;
    font-size: 250%;
}

.button {
  position: absolute;
  width: 80%;
  height: 8%;
  right: 10%;
  top: 70%;
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

.button:active {
  background-color: #FFFFF0 ;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
#Content {
  padding-top: 10%;
  position: absolute;
  width: 100%;
  height: 600%;
  left: 0%;
  top: 130%;
  background: #FFFFFF;
  border-radius: 30px;

}
#Header {
  text-align: center;
   font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: absolute;
  left:10%;
  right: 8.61%;
  top: 2.5%;
  bottom: 90%;
  background: #FFFFFF;
  border-radius: 30px;
}
#Contribution {
    position: absolute;
    width: 22%;
    height: 90%;
    left: 70%;
    bottom:0px;
    background: #57A890;
    border-radius: 30px;
}
</style>