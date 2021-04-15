<template>
    <div id="Homepage" >
      <div id = "transparent" v-if="this.popup"></div>
       <div id="Innerpage">
       <br><br>
        <div v-if="this.popup" id='popup'>
              <button v-on:click="close()" class="close"></button>
               <Input></Input> 
          </div>
           <div id = "transparent" v-if="this.checkpopup"></div>
           <div v-if="this.checkpopup" id='popup'>
             <button v-on:click="close_2()" class="close"></button>
               <recyclable-input-auth></recyclable-input-auth>
          </div>
        <div id='news' >
            <News></News> 
        </div>
        <div id='contribution'>
            <contribution> </contribution>
            <button class='button-2'  v-on:click="changed()">CLICK TO INPUT TRIP </button>
              <button class='button-3'  v-on:click="changed_2()"> RECYCLABLE OR NOT? </button>
        
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
import Forum from '../Forum/Forum.vue'
import Input from './Input.vue'
import RecyclableInputAuth from './RecyclableInputAuth.vue';

export default {
  name: 'Homepage',
  components : {
      News,Contribution,Forum,Input,RecyclableInputAuth 
  }, data() {
    return {
      popup:false,
      checkpopup:false,
      
    }
  }, methods:{
    changed:function(){
      this.popup = true
    },  changed_2:function(){
      this.checkpopup = true
    }, 
   close: function() {
      this.popup = false
    },close_2: function() {
      this.checkpopup = false
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
  margin-left: 15%;
  height:850px;
  width:60%;
  text-align: center;
  background:white;
  border: 25px solid #57A890;
  box-sizing: border-box;
  position: absolute;
  z-index:100;
  border-radius:10px;
  min-height: 700px;
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
  margin-top: 20px;
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
.button-3 {
  text-align: center;
  border-radius: 30px;
  border:none;
  padding:7px;
  width:80%;
  margin-left:10%;
  margin-top: 20px;
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
.button-3:hover {background-color: #FFFFF0}

.button-3:active {
  background-color: #FFFFF0 ;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
#news {
  float:left;
  margin-left:-0.5%;
  height:410px;
  width:70%;
}
#forum-content {
  float:left;
  margin-top:100px;
  margin-left:-1%; 
  width:70%;
  height:400px;
}
#contribution {
  float:right;
  height:700px;
  width:25%;
  margin-top:200px;
  margin-right:3%;
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
    height:970px;
    background: #57A890;
}

.close {
  position: absolute;
  right: 10px;
  top: -50px;
  width: 32px;
  height: 55px;
  opacity: 0.3;
  background-color: transparent;
  border-style:none;
}
.close:hover {
  border-style:none;
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 20px;
  width: 2px;
  background-color: #333;
  border:0px;
}

.close:active {
  border:0px;
}

.close:before {
  border:0px;
  transform: rotate(45deg);

}
.close:after {
  transform: rotate(-45deg);
}

</style>