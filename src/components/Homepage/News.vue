<template>
   <div>
        <!-- Recent Envrionmental News-->
        <div id="Header">
            <div id="Subheader"> RECENT NEWS </div>
        </div> 
        <div class ='scroller' >
          <div v-for= "news in articles" :key="news.source.id" >
              <div id='news-card'>
                <div id='content'>
                  <h3> {{news.title}}</h3>
                  <br>
                  <img v-bind:src="news.urlToImage"  id='image'>
                  <br>
                  <p> {{news.description}} </p> 
                  <a  id='newslink' v-bind:href="news.url"> MORE >> </a> 
                </div>
               
              </div>
      
    </div>

             
 
   </div>
  </div>
</template>

<script>
// import axios from 'axios'
import database from '../../firebase.js'

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
  //  Only able to scrap using localhost so we will store it in firestore and refresh 
  //   fetchData : function(){
  //     axios.get("https://newsapi.org/v2/everything?domains=channelnewsasia.com&q=recycling&apiKey=95b5a7d7204e43a89a0daa2c06938374")
  //     .then(response=>{
  //          for (var item of response.data.articles.slice(1,8)) {
  //            database.collection('News').add(item);
  //          }
  //         })
  // }
    fetchData : function() {
      database.collection('News').get().then(snapshot => { 
          snapshot.docs.forEach(doc => {
            this.articles.push(doc.data());
          })
        })
    }
  },
   created(){
        this.fetchData()
}}
</script>

<style scoped>

#newslink {
  float:right;
}
.scroller {
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: auto;
  margin: 20px;
  padding-left:1%;
}

#content{
  border-radius: 10px;
  height:380px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding-left:3%;
  padding-right:4%;
}
#content a {
  background-color: white;
  padding-left:1%;
  padding-right:1%;
  text-decoration: none;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:700;
  font-size:14px;
  color:#006400;
}

#content:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
#content h3 {
  height:60px;
}
#content p {
  height:120px;
}


#news-card {
  display: inline-block;
  width: 350px;
  padding: 10px; 

}


img {
  width:200px;
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