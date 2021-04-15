<template>
    <div class="comment">
        <div class="avatar">
            <img :src="comment.avatar" alt="">
        </div>
        <div class="text">
            <a class="username">@{{ comment.user }}</a> <span>{{ comment.text }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'singleComment',
        props: ['comment']
    }
</script>

<style scoped>
/* Single-comment component */
.comment {
    display: flex;
    padding: 10px;
    margin-bottom: 15px;
    align-items: center;
    color: #333;
    background-color:whitesmoke;
    border-radius: 5px;
    height:100px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding-left:3%;
    padding-right:4%;
}
.content:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.comment .avatar {
    align-self: flex-start;
}
.comment .avatar > img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    align-self: start;
    margin-top:35%;
}
.comment .text {
    text-align: left;
    margin-left: 5px;
}
.comment .text span {
    margin-left: 5px;
}
.comment .text .username {
    font-weight: bold;
    color: #333;
}
</style>