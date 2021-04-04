<template>
   <div id="forum">
        <!-- Forum -->
        <div id="Header">
            <div id="Subheader"> FORUM </div>
        </div> 
        <div class ='scroller'>
            <div v-for="discussion in discussions" :key="discussion.id">
              <div id='news-card'>
                <div id='content'>
                  <br>
                  <p>Topic </p>
                  <h4>{{discussion.Topic}}</h4>
                  <hr>
                  <span id="likes">{{discussion.Likes.length}} likes   
                    <img class="likes-img" :src="require(`../../assets/likes.png`)"/>
                  </span>

                  <span id="comments">{{discussion.Comments.length}} comments
                     <img class="comment-img" :src="require(`../../assets/comment.png`)"/>
                  </span>
               
                  <button  v-on:click="viewDiscussion(discussion.id)">View Discussion</button>
                </div>
              </div>
          </div>
        </div>
  </div>
</template>

<script>
import database from "../../firebase.js"

export default {
  name: 'Forum',
  data(){
    return{
      discussions:[]
    }

  },
  components: {
 
  },
  methods: {
    fetchItems: function(){
      database.collection("Forum").get().then((querySnapShot)=>{
        querySnapShot.forEach(doc=>{
          let item = {}
          item = doc.data()
          item.id = doc.id
          this.discussions.push(item)
        })
      })
    },

    viewDiscussion: function(discussionId){
      this.$router.push({path:"/discussion", query: {discussionId: discussionId}})
    }
  },
  
  created() {
    this.fetchItems();
  }
  
}
</script>

<style scoped>
.likes-img {
  width:5%;
}
.comment-img {
  width:5%;
}
#forum {
  max-height:400px;
  margin-left:10px;
}

#Subheader {
    width: 90%;
    padding-left:1%;
    left: 20px;
    top: 55%;
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
    top: 20%;
    background: #57A890;
    border-radius: 30px;
     font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  height:2450px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding-left:3%;
  padding-right:4%;
}


#content:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
#content h4 {
  margin-top:-5%;
  padding-bottom:1%;
}
#content p {
  font-size:18px;
  font-weight:500

}


#news-card {
  display: inline-block;
  width: 350px;
  padding: 10px; 

}
span {
  margin-right:10px;
}

button {
  text-align: center;
  border-radius: 30px;
  border:none;
  padding:7px;
  width:80%;
  margin-left:10%;
  display: inline-block;
  padding: 10px 25px;
  font-size: 10px;
  cursor: pointer;
  padding-top:6%;
  text-align: center;
  text-decoration: none;
  outline: none;
  background-color: white;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  font-weight:bold;
  
}

button:hover {background-color: #FFFFF0}

button:active {
  background-color: #FFFFF0 ;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>