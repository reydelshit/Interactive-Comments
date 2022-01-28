<template>
    <div class="replies">
        <div class="replies__container" v-for="com in repeee.replies" :key="com.id">
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
                <div class="reply__icon">
                    <img src="../assets/images/icon-reply.svg" alt="reply-icon">
                    <span>Reply</span>
                </div>
            </div>
            <p>{{comment.content}}</p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['repeee']
}
</script>

<style>

</style>