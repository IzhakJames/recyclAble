<template>
   <div id = 'Form'>
       <div id="Header">RECYCLING TRIPS</div>
       <div id="Content"> 
           <label id="Label-header">
               LOCATION :
            </label><br><br>
          <input type="text"   id="location" class='input-box'>
        <br><br><br><br>
          <label id="Label-header">
               IMAGE UPLOAD :
            </label><br><br>
            <input type="file"  id='image'
            accept="image/*" class="input-file">
        <br><br><br><br>
            <button class='button' v-on:click="SubmitTrip()">SUBMIT</button>
           
    

       </div>
  </div>
</template>

<script>
import database from '../../firebase.js'
export default {
    data() {
        return {
            newCounter:0
        }
    },
  name: 'Input',
  components: {
  }, methods: {
      SubmitTrip: function() {
        //   to edit again - need to pass user id prop from login to this file
         
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

<style scoped>

.button {
  
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
.input-file {
    height:50px;
    font-size:18pt;
}
.input-box {
    width:80%;
    height:50px;
    font-size:18pt;
}
#Label-header {
    position: relative;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 30;
    font-size: 30px;
    line-height: 41px;
    color:white;
    text-align: left;


}
#Content {
    position: relative;
    top: 10%;
    left: 5%;
    width: 90%;

}
#Header {
    position: relative;
    width: 70%;
    height: 5%;
    left: 15%;
    top: 5%;
    padding-top: 1%;
    padding-bottom: 2%;
    background: #FFFFFF;
    border-radius: 30px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;
    text-align: center;



}
#Form {
    position: relative;
    text-align: center;
    left:25%;
    width: 50%;
    height: 60%;
    background: #57A890;
    border: 10px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 30px;
}

</style>