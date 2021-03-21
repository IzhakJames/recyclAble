<template>
   <div id="Homepage">
       <div id="Innerpage">
       <br><br>
            <News></News> 
            <contribution> </contribution>
            <forum></forum>
            <Input></Input>
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
  }
}
</script>

<style scoped>
#Innerpage {
    position: relative;
    width: 95%;
    height: 75%;
    left: 73px;
    top: 163px;
    background: white;
    border-radius: 20px;

}

#Homepage {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #57A890;
}
</style>