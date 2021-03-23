<template>
   <div>
        <!-- Recent Envrionmental News-->
        <div id="Header">
            <div id="Subheader"> RECENT NEWS </div>
        </div> 
        <ul class="side-by-side">
          <li v-for= "news in articles[0].slice(1,4)" :key="news.source.id" >
              <div id='news-card'>
              <h3> {{news.title}}</h3>
              <div id='image'><img v-bind:src="news.urlToImage"></div>
              <h4> {{news.description}} </h4>
              <a v-bind:href="news.url">  See More </a> 
            
        
              </div>
      
    </li>
  </ul>
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
           this.articles.push(response.data.articles)

          })
          
 
  }
  },
   mounted(){
       // console.log('Do I come here')
        this.fetchData()
}}
</script>

<style scoped>
.side-by-side ul {
    float: left;
}
.side-by-side li {
    display: block;
    float: left;
    width:20%;
    height:400px;
    padding-left:10%;
    padding-right:1%;
    padding: 0 1em;
    border-radius: 10px;
    padding-left:1em;
}
#news-card {
    background-color:  #FFFAF0;
    padding-left:2%;
    padding-right:2%;
    padding-top:1%;
    border-radius: 10px;
}
#news-card p {
  text-align: center;
  font-size:14px;
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
    font-size:25px;
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