<template>
  <div id="background">
    <span id="header">recyclABLE</span>
    <div id="recyclable">
      <RecyclableInput></RecyclableInput>
    </div>
    <br />
    <span id="slogan">Your 1 stop recycling buddy</span>
  </div>
</template>

<script>
import RecyclableInput from './RecyclableInput.vue';

export default {
  components: {
    RecyclableInput
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#background {
  background: url(../../assets/RecycleBg.png);
  width: 100vw;
  height: 100vh;
  background-size:1530px 860px;
}

#header {
  color: white;
  font-size: 100px;
  padding-top: 100px;
  display: inline-block;
  padding-left: 20px;
}

#slogan {
  color: white;
  font-size: 50px;
  padding-left: 200px;
  display: inline-block;
}

#recyclable {
  width: 30vw;
  height: 100vh;
  float: right;
  background: linear-gradient(180deg, #73C476 0%, rgba(229, 229, 229, 0) 100%);
  border-radius: 10px;
  margin-top:30px;
}
</style>
