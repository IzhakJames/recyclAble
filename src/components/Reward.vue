<template>
  <div id = "background">
    <br>
    <div id="rectangle">
      <div id="top-row">
          <span class="dot"></span>
          <div id="point-box">
          <h1 id="point"> Reward Points ??/40 </h1>
          <div id="bar-box">
          <div id="bar-progress"></div>
          </div>
          </div>
      </div>
      <div id="bottom-row">
      <div id="left-box">
        <p id="point-text"> You have <strong>20</strong> points remaining</p>
        <button id="redeem-btn">REWARDS REDEEMED</button>
        <button id="avail-btn">REWARDS AVAILABLE</button>
        <div id="reward-box">
          <br>
          <!-- scrolling? -->
          <div class="reward" v-for="voucher in vouchers" v-bind:key="voucher.name">
            <img class="logo" :src="require(`../assets/${voucher.name}.png`)"/>
            <p class="voucher">${{voucher.value}} SHOPPING VOUCHER</p>
            <div class="redeem-box">
            <p class="point">{{voucher.point}} PTS</p>
            <button class="collect-btn">COLLECT</button>
            </div>
          </div>
        </div>
      </div>
      <div id="right-box">
        <div id="trip-title">RECYCLING TRIPS</div>
        <div id="trip-box">BOX</div>
        <p id = "trip-text"> 1 more trips before the next reward point</p>
        <button id="home-btn" v-on:click="route">Click to return to homepage</button>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
import database from '../firebase.js'

export default {
  data() {
    return {
      vouchers: []
    }
  }, methods : {
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

.redeem-box {
  float:right;
  margin-right:5%;
}

.collect-btn {
font-family: Roboto;
font-style: italic;
font-weight: 300;
font-size: 20px;
background: #FFFFFF;
border-radius: 30px;
border:none;
float:right;
margin-top:0px;
}

.point {
  margin-left:20%;
  margin-bottom:15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
}

.voucher {
  float:left;
  font-family: Roboto;
  font-style: italic;
  font-size: 25px;
  margin-left:3%;
  margin-top:35px;
}

.logo {
  float:left;
  margin-top:30px;
  margin-left:3%;
}

#home-btn {
font-family: Roboto;
font-style: italic;
font-size: 16px;
font-weight:bold;
text-align: center;
border-radius: 30px;
background: hsl(0, 0%, 100%);
border:none;
padding:7px;
width:60%;
margin-left:20%;
}

#trip-text {
font-family: Roboto;
font-style: italic;
font-weight: 300;
font-size: 20px;
text-align: center;
color:white;
}

#trip-box {
  margin-top:40px;
  border-radius:20px;
  height:300px;
  width:80%;
  margin-left:10%;
  background:white;
}


#trip-title {
font-family: Roboto;
font-style: italic;
font-size: 20px;
text-align: center;
border-radius: 30px;
background: #FFFFFF;
margin-top:20px;
margin-left:20%;
width:60%;
padding:5px;
}

.reward {
  width:95%;
  margin-left:2.5%;
  margin-top:20px;
  margin-bottom:25px;
  border-radius:20px;
  background-color:lightgrey;
  height:100px;
}

#reward-box {
  margin-top:20px;
  border-radius:20px;
  height:500px;
  width:80%;
  margin-left:10%;
  background:white;
  overflow:scroll;
}

#redeem-btn {
font-family: Roboto;
font-style: italic;
font-size: 16px;
font-weight:bold;
text-align: center;
border-radius: 30px;
background: #FFFFFF;
border:none;
margin-left:3%;
padding:7px;
}

#avail-btn {
font-family: Roboto;
font-style: italic;
font-size: 16px;
font-weight:bold;
text-align: center;
border-radius: 30px;
background: #FFFFFF;
border:none;
float:right;
margin-right:3%;
padding:7px;
}

#point-text {
  text-align:center;
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 25px;
  margin:15px;
}

#left-box {
  margin-top:30px;
  float:left;
  margin-left:5%;
  height:670px;
  width:50%;
  border-radius:30px;
  background-color:#57A890;
}

#right-box {
  float:right;
  margin-right:5%;
  margin-top:30px;
  height:670px;
  width:33%;
  border-radius:30px;
  background-color:#57A890;
}

#bar-box {
  width:100%;
  height:20px;
  background-color:lightgrey;
  border-radius:10px;
}

#bar-progress {
  background-color:green;
  height:20px;
  border-radius:10px;
  width:30%;
}

#point-box {
  float:left;
  width:70%;
  height:125px;
  margin-right:5%;
}

#background {
  height:860px;
  background-color:#57A890;
  min-width:1400px;
}

#rectangle {
width: 90%;
height: 780px;
margin:0px 5%;
background: white;
border-radius: 30px;
}

#top-row {
  margin-top:30px;
  height:120px;
}

.dot {
  float:left;
  margin:15px 3% 0% 7%;
  height: 110px;
  width: 8%;
  background-color: #bbb;
  border-radius: 50%;
}

#point {
font-family: Roboto;
font-style: italic;
font-weight: 500;
font-size: 40px;
}

</style>