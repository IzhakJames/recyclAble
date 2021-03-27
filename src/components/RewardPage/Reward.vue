<template>
  <div id = "background">
    <br>
    <div id="rectangle">
      <div id="top-row">
          <span class="dot"></span>
          <div id="point-box">
          <h1> REWARD POINTS: /40 </h1>

          <div id="bar-box">
          <div id="bar-progress"></div>
              <br>
          <p>125pts to NEXT TIER >></p>
          </div>
          </div>
      </div>
      <div>
      <div id="left-box">
   
          <div id="point-text">
            <img class="user" :src="require(`../../assets/crown.png`)"/>
             <h5> Username

               <p>20pts remaining </p>
             </h5>
             
             <!-- change to button to link to user profile -->
             <h6> View Profile >> </h6> 
            
          </div>
          <div id="nav-btn">
            <button id="redeem-btn" v-on:click="selectRedeem=true">REWARDS REDEEMED</button>
            <button id="avail-btn" v-on:click="selectRedeem=false">REWARDS AVAILABLE</button>
           </div>
            <div class="reward-box" v-if="!selectRedeem">
              
              <!-- scrolling? -->
              <div class="reward" v-for="voucher in vouchers" v-bind:key="voucher.name">
                <img class="logo" :src="require(`../../assets/${voucher.name}.png`)"/>
              
                <div class="voucher">
                  ${{voucher.value}} SHOPPING VOUCHER
                <p> Collectable until 29 Feb 2020</p>
                </div>
                <div class="redeem-box">
                <p class="point">{{voucher.point}} PTS</p>
                <button class="collect-btn">COLLECT</button>
           
                </div>
              </div>
          </div>


        <div v-else class="reward-box">
        </div>
      
        
      </div>
      <div id="right-box">
        <div id="trip-title">RECYCLING TRIPS</div>
          <div id="trip-box">
            <doughnut></doughnut>
          </div>
       <br>
        <p id = "trip-text"> 1 more trips before the next reward point</p>
        <button id="home-btn" v-on:click="route">Click to return to homepage</button>

      </div>
      </div>

    </div>
  </div>
</template>

<script>
import database from '../../firebase.js'
import Doughnut from './DoughnutChart.vue'

export default {
  data() {
    return {
      vouchers: [],
      selectRedeem:false
    }
  }, 
  components: {
    Doughnut
  }
  ,methods : {
     route:function(){
        //pass user prop id here
        this.$router.push({ path: '/home'}
        )
    },
       fetchItems:function(){
          database.collection('Voucher').get().then(snapshot => { 
          snapshot.docs.forEach(doc => {
            var obj = doc.data()
            this.vouchers.push(obj);
          })
          }) 
        }
  },
    created(){
      this.fetchItems()  
      }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
  width:70px;
  margin-top:1%;
  float:left;
  margin-left:5%;
}
.redeem-box {
  float:right;
  margin-right:5%;
}

#nav-btn {
  background-color: white;
  width:90%;
  margin-left:5%;
  border-radius: 10px;
}
.collect-btn {
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 400;
font-size: 20px;
background: #FFFFFF;
border-radius: 30px;
border:none;
padding-left:10%;
padding-right:10%;
padding-top:5%;
padding-bottom:5%;
float:right;
color:#006400;
margin-right:-40%;
margin-top:60px;

}

.collect-btn:hover{
  background-color:rgba(0,0,0,0.2);
}
.point {
  margin-left:30%;
  margin-bottom:5px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding-left:5%;
  padding-right:5%;
  background-color:lightgrey;
  border-radius: 10px;
}

.voucher {
  float:left;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  margin-left:10%;
  font-weight:500;
  margin-top:50px;
}
.voucher p {
  font-size: 12px;
   font-weight:300;
  margin-top:40px;

}

.logo {
  float:left;
  margin-top:30px;
  margin-left:3%;
  width:30%;
  height:70px;


}

#home-btn {
  text-align: center;
  border-radius: 30px;
  border:none;
  padding:7px;
  width:80%;
  margin-left:10%;
  margin-top: 10%;
  display: inline-block;
  padding: 15px 25px;
  font-size: 10gpx;
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
#home-btn:hover {background-color: #FFFFF0}

#home-btn:active {
  background-color: #FFFFF0 ;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#trip-text {
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: italic;
font-weight: 300;
font-size: 18px;
margin-left:1%;
text-align: center;
color:white;
}

#trip-box {
 margin-top:10px;
  border-radius:20px;
  height:350px;
  width:80%;
  margin-left:10%;
  background:white;
  padding-left:8%;
  padding-right:5%;
  padding-bottom:5%;
}


#trip-title {
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

.reward:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.reward {
  padding-top: 1%;
  box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding-left:3%;
  padding-right:4%;
  width:95%;
  margin-left:2.5%;
  margin-top:20px;
  margin-bottom:25px;
  background-color:white;
  height:150px;
}

.reward-box {
  margin-top:7px;
  width:95%;
  height:480px;
  margin-left:2.5%;
  overflow:scroll;
}

#redeem-btn {
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 16px;
font-weight:500;
text-align: center;
border-radius: 10px;
background: #FFFFFF;
border:none;
padding:7px;
padding-left:10%;
padding-right:10%;
}

#redeem-btn:hover{
  background-color: lightgrey;
  text-decoration:line;
  border-radius: 10px;
 
}

#avail-btn {
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 16px;
font-weight:500;
text-align: center;
border-radius: 10px;
background: #FFFFFF;
border:none;
float:right;
margin-right:10%;
padding:7px;
}
#avail-btn:hover{
  background-color: lightgrey;
  padding-left:10%;
  padding-right:10%;
  border-radius: 10px;
 
}

#point-text {
  text-align:center;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin:30px;
  width:90%;
  height: 100px;
  margin-left:5%;
  padding-top:0.5%;
  background-color: white;
}

#point-text p {
  float:left;
  margin-left:25%;
  margin-top:15%;
  font-size:12px;
  font-weight: 100;
}

#point-text h5{
  float:left;
  font-size:18px;
  margin-left:-2%;
  margin-top:2%;
}
#point-text h6{
  float:right;
  font-size:14px;
  margin-right:4%;
  margin-top:5%;
  font-weight:400;
  color:#006400;
  
}
#left-box {
  float:left;
  margin-left:5%;
  margin-top:-0.5%;
  height:700px;
  width:60%;
  border-radius:30px;
  background-color:#57A890;
}

#right-box {
  float:right;
  margin-top:-0.5%;
  margin-right:3%;
  height:700px;
  width:25%;
  border-radius:30px;
  background-color:#57A890;
}

#bar-box {
  width:100%;
  height:20px;
  background-color:lightgrey;
  border-radius:10px;
}
#bar-box p {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 100;
}

#bar-progress {
  background-color:green;
  height:20px;
  border-radius:10px;
  width:30%;
  margin-top:3%;
}

#point-box {
  float:left;
  width:70%;
  margin-right:5%;
  margin-top:8%;
}

#background {
    width: 100%;
    min-width:1400px;
    height:1000px;
    background: #57A890;
}

#rectangle {
  width: 90%;
  height: 920px;
  margin:0px 5%;
  background: white;
  border-radius: 30px;
}



#top-row {
  height:250px;
  background-image: url('../../assets/rewardsBG.png');
  border-radius:30px;
}

.dot {
  float:left;
  margin:15px 3% 0% 7%;
  height: 140px;
  width: 12%;
  margin-top:5%;
  background-color: #bbb;
  border-radius: 50%;
}

#point-box h1 {
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 600;
font-size: 25px;

}

</style>