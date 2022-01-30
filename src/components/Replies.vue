<template>
    <div class="reply__container">
      <div class="reply__header" v-if="replyHolder.length">
        <button @click="replyDelete(reply)">delete</button>
        <button @click="replyEdit">edit</button>
      </div>

      <div class="reply__content" v-if="replyInitiator">
        <img :src="require('@/assets/images/avatars/' + rep.image.png)" alt="username-icon">
        <textarea type="text" v-model="reply"></textarea>
        <button @click="submitReply">Reply</button>
      </div>
        <h1>{{reply}}</h1>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {

  props: ['rep', 'com'],

  setup(props){

    const reply = ref(`@${props.com.user.username} `)
    const replyHolder = ref([])
    let replyInitiator = ref(true)


    const submitReply = () => {
      replyHolder.value = reply.value
      replyInitiator.value = false
    }

    const replyEdit = () => {
      replyInitiator.value = true
    }

    const replyDelete = (id) => {

      console.log(id)
      replyHolder.value = replyHolder.value.filter((e) => {
        return e !== id
      })
        // console.log(id)
    }
    return{ reply, submitReply, replyHolder, replyInitiator, replyEdit, replyDelete}
  }



}
</script>

<style scoped>

*{
  font-style: var(--rubik);
}
:root{

    --rubik: 'Rubik', sans-serif;
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

.reply__container{
  padding: 1em;
  width: 100%;
}
.reply__content{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}

.reply__content > *{
  margin-right: 1em;
}

.reply__content img{
  width: 2rem;

}

.reply__content textarea{
  height: 5rem;
  width: 90%;
  resize: none;
  outline: none;
  border-radius: 8px;
  padding: 1rem
}

.reply__content button{
  width: 6rem;
  padding: 0.8rem;
  background: none;
  border: none;
  background: var(--Moderate-blue);
  font-weight: 500;
  color: var(--White);
  cursor: pointer;
  border-radius: 4px;
}

.reply__content button:hover{
  opacity: 0.8;
}

</style>