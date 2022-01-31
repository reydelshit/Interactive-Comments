<template>
            <div class="replies" v-for="com in comm" :key="com.id">
                <div class="replies__container">
                    <div class="comments__upvotes">
                        <span class="upvotes__icon" @click="com.score++">+</span>
                        <span>{{com.score}}</span>
                        <span class="upvotes__icon" @click="com.score--">-</span>
                    </div> 
                <div class="comments__descriptions">
                    <div class="comments__inside">
                        <span class="username username__replies">
                            <img :src="require('@/assets/images/avatars/' + com.user.image.png)" alt="username-icon">
                            <span>{{com.user.username}}</span>
                            <span>{{com.createdAt}}</span>
                        </span>
                        <div @click="replyM(com.id)" class="reply__icon" >
                            <img src="../assets/images/icon-reply.svg" alt="reply-icon">
                            <span>Reply</span>
                        </div>
                    </div>
                    <p>{{com.content}}</p>
                </div>
            </div>
                <Replies class="replies__container" :com="com" :rep="reply" v-if="renderRep === com.id"/>
         </div>
</template>


<script>
import Replies from './Replies.vue'

export default {
    props: ['comm'],
    components: {
        Replies,
    },
    data(){
        return{
            renderRep: null,
        }
    },
    methods:{
        replyM(w){
            if(w === w){
                this.renderRep = w
            }
        },
        closee(){
            this.renderRep = !this.renderRep
        }
    }
}
</script>

<style>

</style>