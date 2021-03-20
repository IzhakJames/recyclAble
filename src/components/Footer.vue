<template>
  <div class="footer">
    <footer>
        <p>@recyclABLE pte ltd</p>
                
    </footer>
    
  </div>
</template>

<script>
export default {
  
  data(){
    return{
        copyRtSymbol:'&copy;BT3103'
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    background-color: white;
    border-radius: 20px;
    position: absolute;
    width: 20%;
    height: 5%;
    bottom:0%;
    margin-left:40%;
}
p{
    font-family: Roboto;
    font-style: italic;
    font-weight: 900;
    font-size: 24px;
    vertical-align: center;
    text-align: center;
    color: #000000;
    margin-top: 6px;
}
</style>



