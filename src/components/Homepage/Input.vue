<template>
   <div>
       <div id="Header">RECYCLING TRIPS</div>
       <div id="Content"> 
           <label id="Label-header">
               LOCATION :
            </label><br>
          <input type="text"   id="location" class='input-box'>
        <br><br>
          <label id="Label-header">
               IMAGE UPLOAD :
            </label><br>
            <input type="file"  id='image'
            accept="image/*" class="input-file">
           
    

       </div>
  </div>
</template>

<script>
import database from '../../firebase.js'
export default {
    data() {
        return {
            newCounter:0,
            newTotal:0
        }
    },
  name: 'Input',
  components: {
  }, methods: {
      SubmitTrip: function() {
        //   to edit again - need to pass user id prop from login to this file
      
      database.collection('TotalCounter').doc('zDNR308gXbNgZkBQs3Gy').get().then((docRef) => { 
          this.newTotal=docRef.data().TotalCounter +1
          database.collection('TotalCounter').doc('zDNR308gXbNgZkBQs3Gy').update({TotalCounter:this.newTotal})
          })  
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
    font-size:15pt;
}
.input-box {
    width:80%;
    height:50px;
    font-size:13pt;
}
#Label-header {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 30;
    font-size: 18px;
    line-height: 41px;
    color:white;
    text-align: left;


}

#Content {
    margin-left:5%;
    margin-top:2%;
    padding-top:1%;
    width: 90%;

}
#Header {
    margin-left:5%;
    margin-top:2%;
    padding-top:1%;
    padding-bottom:1%;
    width: 90%;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
    border-radius: 30px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:15px;
    font-weight:bold;



}
#Form {
  float:right;
  height:300px;
  width:50%;
  border-radius:30px;
  background-color:#57A890;
  text-align: center;
  background: #57A890;
  border: 10px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 30px;

}

</style>