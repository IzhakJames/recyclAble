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

      <div id="left-box">
        <p id="point-text"> You have <strong>20</strong> points remaining</p>
        <button id="redeem-btn">REWARDS REDEEMED</button>
        <button id="avail-btn">REWARDS AVAILABLE</button>
        <div id="reward-box">
          <br>
          <!-- connect to firebase rewards -->
          <!-- scrolling? -->
          <div class="reward">
            a
          </div>
          <div class="reward">
            b
          </div>
          <div class="reward">
            c
          </div>
        </div>
      </div>
      <div id="right-box">
        <div id="trip-title">RECYCLING TRIPS</div>
        <div id="trip-box">BOX</div>
        <p id = "trip-text"> 1 more trips before the next reward point</p>
        <button id="home-btn">Click to return to homepage</button>
      </div>

    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  margin-top:10%;
  border-radius:20px;
  height:35%;
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
margin-top:5%;
margin-left:20%;
width:60%;
padding:5px;
}

.reward {
  width:95%;
  margin-left:2.5%;
  margin-top:4%;
  border-radius:20px;
  background-color:lightgrey;
  height:20%;
}

#reward-box {
  margin-top:4%;
  border-radius:20px;
  height:60%;
  width:80%;
  margin-left:10%;
  background:white;
  
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
  margin:2%;
}

#left-box {
  float:left;
  margin-top:2%;
  margin-left:4%;
  height:80%;
  width:50%;
  border-radius:30px;
  background-color:#57A890;
}

#right-box {
  float:left;
  margin-top:2%;
  margin-left:8%;
  height:80%;
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
  margin-right:5%;
}

#background {
  height:95vh;
  background-color:#57A890;
  min-width:1000px;
}

#rectangle {
width: 90%;
height: 85%;
margin:0% 5%;
background: white;
border-radius: 30px;
}

#top-row {
  margin-top:2%;
  height:20%;
}

.dot {
  float:left;
  margin:1.5% 3% 1% 7%;
  height: 70%;
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