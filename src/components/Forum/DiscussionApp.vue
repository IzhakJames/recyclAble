<template>
  <div id="app">
    <div class="comments-outside">
      <div class="comments-header">
            <div class="post-owner">
            <div class="topic">
              {{this.discussion.Topic}}
            </div>
          </div>
          <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
          <div class="comments-stats">
            <span><i class="fa fa-thumbs-up" id="like" v-bind:class="{'liked': likeThis, 'unliked': unlikedThis}" v-on:click="like()"></i> {{ likes.length }}</span>
            <span><i class="fa fa-comment"></i> {{ comments.length }}</span>
          </div>

        </div>

        <comments 
          :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
          :comments="comments"
          :current_user="current_user"
          @submit-comment="submitComment"
          @changed = "hideUsername"
        ></comments>

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

<style>
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
.post-owner {
  display: flex;
  align-items: center;
}

.liked {
  color: blue
}

.unliked{
  color:inherit
}

</style>