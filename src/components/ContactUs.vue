<template>
  <div id = "background">
    <div id="rectangle">
        <h1>Ask Us Anything!</h1>
        <p>If you think your item is wrongly classified as recyclable, or if you have any further enquiries related to recycling or our application, please fill up the form below!</p>

        <input v-model="question.Fname" type="text" id="fname" name="fname" placeholder="First Name">
        <input v-model="question.Lname" type="text" id="lname" name="lname" placeholder="Last Name"><br>
        <input v-model="question.Email" type="text" id="email" name="email" placeholder="Email"><br>
        <input v-model="question.Question" type="text" id="detail" name="detail" placeholder="Ask your question here!"><br>

        <button v-on:click="sendQuestion()">Submit</button>

    </div>
  </div>
</template>

<script>
import database from "../firebase.js"
export default {
  data(){
    return{
        question: {
            Fname:'',
            Lname:'',
            Email:'',
            Question:'',
        }
        }
  },

  methods: {
    sendQuestion:function(){        
        database.collection('Questions').add(this.question).then(() => {location.reload(alert("Your question is submitted successfully. Our team will respond within 3 working days."))});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input {
  border-radius:5px;
  padding:10px;
  border:none;
}

h1 {
    text-align: center;
    font-family: Roboto;
    font-style: italic;
    font-weight: bold;
    font-size: 35px;
    line-height: 53px;
    margin:2% 0% 0% 0%;

}

p {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    padding:5px;
    margin:0%;
}

#background {
  background: url(../assets/RecycleBg.png);
  height:95vh;
  background-color:#57A890;
  min-width:1400px;
}

#rectangle {
    min-width:700px;
    width: 55%;
    height: 70%;
    margin:5% 25%;
    background: white;
    border-radius: 30px;
    position: absolute;
}

#fname, #lname {
    width: 38%;
    height: 10%;
    margin: 1% 5%;

    background: #E9E9E9;
}

#email {
    width: 87%;
    height: 10%;
    margin: 1% 5%;
}

#detail {
    width: 87%;
    height: 20%;
    margin: 1% 5%;
    background: #E9E9E9;
}

button { 
    width: 15%;
    height: 8%;
    margin:2% 0% 0% 78%;
    background: #4776EE;
    border-radius: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    border:none;
    color: #FFFFFF;

}

</style>