<template>
   <div>
    <header>
        <h1>{{ msg }}</h1>
        <div id="link">
            <router-link to="/signup" exact>Sign Up </router-link>
            <router-link to="/login" exact>Login</router-link>
        </div>
    </header>
    </div>
  
</template>

<script>
export default {
  
  data(){
    return{
        msg: 'recyclABLE'
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    line-height: 20px;
    width:100%;
    min-width:1400px;
    background-color: #255029;
    font-size:20px;
    height:50px;
}
h1{
    margin-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 15px;
    color: #FFFFFF;
    float:left;
    width:10%;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
}

#link {
    height:20px;
    margin-top: 18px;
    font-size:20px;
    width: 200px;
    float:right;
}
</style>