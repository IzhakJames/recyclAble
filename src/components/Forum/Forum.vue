<template>
   <div id="forum">
        <!-- Forum -->
        <div id="Header">
            <div id="Subheader"> FORUM </div>
        </div> 
        <div id="forum_content">
          <div>Trending Topics</div>  
          <ul>
              <li v-for="discussion in discussions" :key="discussion.id">
                  <p id="topic">{{discussion.Topic}}</p>
                  <span id="likes">{{discussion.Likes.length}} likes</span>
                  <span id="comments">{{discussion.Comments.length}} comments</span>
                  <button id="viewDiscussion" v-on:click="viewDiscussion(discussion.id)">View Discussion</button>
            </li>
          </ul>
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

ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    overflow-x:scroll;
    overflow-y:unset;


}
li {
    flex-grow: 1;
    width:300px;
    height: 200px;
    flex-basis: 10%;
    text-align: left;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
    display: inline;
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