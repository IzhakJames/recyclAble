<template>
 <div id="Outerpage" >
    <div id="Innerpage" >
      <div class='header'>
        <img class="likes-img" :src="require(`../../assets/RecycleBg.png`)"/>
         <h3> recyclABLE Forum Discussion</h3>
         <p> Aiming to connect environmentally-conscious people</p> 
      </div>
      <br>
       <div class="topic">
            <h3> Discussion Topic: {{this.discussion.Topic}} </h3>
          
        </div>
        
        <div id="likes">
          {{discussion.Likes.length}} likes   
          <i class="fa fa-thumbs-up" id="like" v-bind:class="{'liked': likeThis, 'unliked': unlikedThis}" v-on:click="like()"></i>
          {{ comments.length }}
          <i class="fa fa-comment"></i> 
        </div>
        <hr>
        <div id="comment">Comments</div>
     
          <comments 
            :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
            :comments="comments"
            :current_user="current_user"
            @submit-comment="submitComment"
            @changed = "hideUsername"
          ></comments>
       
        

 
  
         
          <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
       

  


   
     </div>
      </div>

 
</template>

<script>
import Comments from './Comments.vue'
import database from "../../firebase.js"
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: 'app',
  components: {
    Comments
  },
  data() {
    return {
      discussion:{},
      likes: [],
      current_user: {
        avatar: 'http://via.placeholder.com/100x100/a74848',
        user: 'exampler'
      },
      comments: [],
      likeThis: false,
      unlikedThis: true,
      showUserName: true,
      currentUsername:""
    }
  },
  methods: {
    submitComment: function(reply) {
      var currComment = {
        id: this.comments.length + 1,
        user: this.current_user.user,
        avatar: this.current_user.avatar,
        text: reply
      }
      this.discussion.Comments.push(currComment);
      database.collection("Forum").doc(this.$route.query.discussionId).update(this.discussion).then(() => {});
    },

    fetchItems: function(){
          database.collection('Forum').doc(this.$route.query.discussionId).get()
  .then((doc) => {if (doc.exists) {
              this.discussion = doc.data()
              this.comments = this.discussion.Comments
              this.likes = this.discussion.Likes
              for (var i = 0; i < this.likes.length; i++) {
                if (this.current_user.email === this.likes[i]) {
                  this.likeThis = true;
                  this.unlikedThis = false;
                }
              }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
      },
    like: function() {
      // unliking
      if(this.likeThis) {
        for(var i = 0; i < this.likes.length; i++) {
          if(this.current_user.email === this.likes[i]) {
            this.likes.splice(i, 1);
          }
        }
      } else if(!this.likeThis) {
        this.likes.push(this.current_user.email);
      }
      var newObj = {
        Topic: this.discussion.Topic,
        Likes: this.likes,
        Comments: this.comments
      }
      database.collection("Forum").doc(this.$route.query.discussionId).update(newObj).then(() => {});

      this.likeThis = !this.likeThis;
      this.unlikedThis = !this.unlikedThis;
    },
    hideUsername: function(toggled) {
      if(toggled) {
        this.current_user.user = this.currentUsername.charAt(0) + "********" + this.currentUsername.charAt(this.currentUsername.length - 1)
      } else {
        this.current_user.user = this.currentUsername
      }
    }
  },
  props:{
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedOut = false;
        var uid = firebase.auth().currentUser.uid;
        database.collection('Users').doc(uid).get().then((doc) => {
            if (doc.exists) {
              this.thisUser = doc.data();
              this.current_user.user =  doc.data().fullName;
              this.currentUsername =  doc.data().fullName;
              this.current_user.email = doc.data().email
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
          this.fetchItems();
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
      } else {
        this.loggedOut = true;
      }
    });    
  },

}
</script>

<style scoped>

.header img {
  width:20%;
  float:left;
  margin-left:5%;

}
.header h3 {
  text-align: center;
  padding-top: 2%;
  margin-left: 15%;
  float:left;
  font-size:30px;
  font-weight: 200;
}
.header p {
  text-align: center;
  margin-left: 15%;
  float:left;
}
.topic {
  height:100px;
  margin-top:8%;
  
}
#likes {
 float:right;
 margin-right:5%;
 margin-top:-1%;

}
.topic h3{
  padding-top:4%;
  float:left;
  margin-left:5%;
font-weight: 400;
  font-size:18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#Innerpage {
  width: 90%;
  height: 920px;
  margin:0px 5%;
  background: white;
  border-radius: 30px;

}

#Outerpage {
    padding-top:1.5%;
    width: 100%;
    min-width:1400px;
    height:970px;
    background: #57A890;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 500px;
}
a {
  text-decoration: none;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ececec;
  margin: 1em 0;
  padding: 0;
}
.comments-outside {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  max-width: 600px;
}
.comments-header {
  background-color: #C8C8C8;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: #333;
  min-height: 80px;
  font-size: 20px;
}
.comments-header .comments-stats span {
  margin-left: 10px;
}

.liked {
  color: blue
}

.unliked{
  color:inherit
}

</style>