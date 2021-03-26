<template>
   <div>
        <!-- Recent Envrionmental News-->
        <div id="Header">
            <div id="Subheader"> RECENT NEWS </div>
        </div> 
        <div class ='scroller' >
          <div v-for= "news in articles[0]" :key="news.source.id" >
              <div id='news-card'>
                <div id='content'>

              <h3> {{news.title}}</h3>
              <br>
              <img v-bind:src="news.urlToImage"  id='image'>
              <br>
              <p> {{news.description}} </p>
              <button class='button'><a v-bind:href="news.url">  See More </a> </button>
              </div>
              </div>
      
    </div>

             
 
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      articles:[]
    }

  },
  name: 'News',
  components: {
 
  }, 
  methods: {
   
    fetchData : function(){
      axios.get("http://newsapi.org/v2/everything?domains=channelnewsasia.com&q=recycling&apiKey=95b5a7d7204e43a89a0daa2c06938374")
      .then(response=>{

           console.log(response.data)
           this.articles.push(response.data.articles.slice(1,8))

          })
          
 
  }
  },
   mounted(){
       // console.log('Do I come here')
        this.fetchData()
}}
</script>

<style scoped>

.button {
  text-align: center;
  border-radius: 30px;
  border:none;
  padding:7px;
  width:50%;
  margin-left:20%;

  display: inline-block;
  padding: 15px 25px;
  font-size: 10px;
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

.scroller {
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: auto;
  margin: 20px;
  padding-left:1%;
  

}

#content{
  background-color:  #FFFAF0;
   border-radius: 10px;
   padding-top: 1%;
   height:400px;

}
#content h4 {
  text-align: center;

}

#news-card {
   display: inline-block;
    width: 300px;
    height: 200px;
    padding: 10px; 
}


img {
  width: 150px;
  display: block;
  height: 100px;
  margin-left: auto;
  margin-right: auto;

}

#Subheader {
    width: 90%;
    padding-left:1%;
    left: 20px;
    top: 10%;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
    border-radius: 30px;
    font-size:18px;
    font-weight:bold;
    padding-top:2%;

}
#Header {
    text-align: center;
    width: 20%;
    height: 10%;
    padding-top:0.5%;
    padding-bottom: 0.5%;
    padding-left:1%;
    top: 10%;
    background: #57A890;
    border-radius: 30px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>