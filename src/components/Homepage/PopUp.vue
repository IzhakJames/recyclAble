<template>
   <div id="Homepage">
       <div id="Innerpage">
       <br><br>
      
            <News></News> 
            <contribution> </contribution>
                <Input></Input>
            <div id='forum-content'> 
              <forum></forum>
            </div>
         

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
#forum-content {
  padding-top:10%;

}
#Innerpage {
  width: 90%;
  height: 780px;
  margin:0px 5%;
  background: white;
  border-radius: 30px;

}


#Homepage {
    padding-top:1.5%;
    width: 100%;
    min-width:1400px;
    height:860px;
    background: #57A890;
}
</style>