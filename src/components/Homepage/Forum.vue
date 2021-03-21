<template>
   <div>
        <!-- Forum -->
        <div id="Header">
            <div id="Subheader"> 
                <h1> FORUM </h1>

            </div>
        </div> 

  </div>
</template>

<script>
export default {
  name: 'Forum',
  components: {
 
  }
}
</script>

<style scoped>
#Subheader {
    position: absolute;
    width: 90%;
    height: 80%;
    left: 20px;
    top: 10%;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
    border-radius: 30px;

}
#Header {
    text-align: center;
    position: absolute;
    width: 20%;
    height: 8%;
    left: 0px;
    top: 55%;
    background: #57A890;
    border-radius: 30px;
     font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>