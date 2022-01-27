<template>
  <Comment :comments="comment"/>
  <Replies :reply="comment.replies"/>
</template>

<script>
import Comment from './components/Comment.vue'
import Replies from './components/Replies.vue'
import getComment from '../reusable/getComment'

export default {
  name: 'App',
  components: {
    Comment,
    Replies
  },

  setup() {
    const {comment, fetchPost, err} = getComment()
    fetchPost()
    return {comment, err}
  }
}
</script>

<style>

:root{

  --Moderate-blue: hsl(238, 40%, 52%);
  --Soft-Red: hsl(358, 79%, 66%);
  --Light-grayish-blue: hsl(239, 57%, 85%);
  --Pale-red: hsl(357, 100%, 86%);


  --Dark-blue: hsl(212, 24%, 26%);
  --Grayish-Blue: hsl(211, 10%, 45%);
  --Light-gray: hsl(223, 19%, 93%);
  --Very-light-gray: hsl(228, 33%, 97%);
  --White: hsl(0, 0%, 100%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  background: var(--Very-light-gray);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
