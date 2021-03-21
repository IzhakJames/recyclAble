<template>
   <div>

        <!-- Contributions Card-->
        <div id = "Contribution">
            <div id="Header"> 
              <h1> YOUR CONTRIBUTIONS</h1>
            <div id="Content">
              <doughnut></doughnut>
              <div id='donut-inner'> 
                 <h2>100%</h2>
              </div>
            </div>
            </div>
        <button class='button' > CLICK TO INPUT TRIP  </button>
        
           
        </div>

  </div>
</template>

<script>
import Doughnut from './DoughnutChart.vue'
export default {
  name: 'Contributions',
  components: {
  Doughnut
 
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