<template>
  <div id="background">
    <span id="header">recyclABLE</span>
    <div id="recyclable">DARIUS PUT YOUR RECYCLABLE OR NOT COMPONENET HERE</div>
    <br />
    <span id="slogan">Your 1 stop recycling buddy</span>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#background {
  background: url(../assets/RecycleBg.png);
  width: 100vw;
  height: 100vh;
  background-size: cover;
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
  background: rgb(85, 161, 104);
  width: 30vw;
  height: 100vh;
  float: right;
}
</style>
