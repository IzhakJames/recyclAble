<template>
    <div id="Homepage" >
      <div id = "transparent" v-if="this.popup"></div>
       <div id="Innerpage">
       <br><br>
        <div v-if="this.popup" id='popup'>
               <Input></Input> 
          </div>
        <div id='news' >
            <News></News> 
        </div>
        <div id='contribution'>
            <contribution> </contribution>
            <button class='button-2'  v-on:click="changed()">CLICK TO INPUT TRIP </button>
  
        </div>
        <div id='forum-content'> 
          <forum></forum>
        </div>
      </div>
     
    </div>

</template>

<script>
import News from './News.vue'
import Contribution from './Contributions.vue'
import Forum from './Forum.vue'
import Input from './Input.vue'

export default {
  name: 'Homepage',
  components : {
      News,Contribution,Forum,Input
  }, data() {
    return {
      popup:false
      
    }
  }, methods:{
    changed:function(){
      this.popup = true
    }, 
    SubmitTrip: function() {
      alert(3);
      this.popup = false

    }
  }
}
</script>

<style scoped>

#transparent {
  z-index:99;
  position:absolute;
  width:100%;
  height:130%;
  background-color:white;
  opacity:0.8;
}

#popup {
  float:left;
  margin-left: 20%;
  height:800px;
  width:50%;
  border-radius:30px;
  background-color:#57A890;
  text-align: center;
  background: #57A890;
  border: 10px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 30px;
  position: absolute;
  z-index:100;
}
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
.button-2 {
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
.button-1:hover {background-color: #FFFFF0}

.button-1:active {
  background-color: #FFFFF0 ;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.button-2:hover {background-color: #FFFFF0}

.button-2:active {
  background-color: #FFFFF0 ;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
#news {
  float:left;
  margin-left:-0.5%;
  height:400px;
  width:70%;
}
#forum-content {
  float:left;
  margin-top:50px;
    margin-left:-0.5%; 
  width:70%;
  height:400px;
}
#contribution {
  float:right;
  margin-right:3%;
  margin-top:100px;
  height:700px;
  width:25%;
  border-radius:30px;
  background-color:#57A890;
}
#Innerpage {
  width: 90%;
  height: 920px;
  margin:0px 5%;
  background: white;
  border-radius: 30px;

}

#Homepage {
    padding-top:1.5%;
    width: 100%;
    min-width:1400px;
    height:1000px;
    background: #57A890;
}
</style>