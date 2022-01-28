<template>
  <div class="comments" v-for="comment in comments" :key="comment.id">  
    <div class="comments__container">
        <div class="comments__upvotes">
                <span class="upvotes__icon">+</span>
            <span>{{comment.score}}</span>
                <span class="upvotes__icon">-</span>
        </div>  
        <div class="comments__descriptions">
            <div class="comments__inside">
                <span class="username">
                    <img :src="require('@/assets/images/avatars/' + comment.user.image.png)" alt="username-icon">
                    <span>{{comment.user.username}}</span>
                    <span>{{comment.createdAt}}</span>
                </span>
                <div class="reply">
                    <img src="../assets/images/icon-reply.svg" alt="reply-icon">
                    <span>Reply</span>
                </div>
            </div>
            <p>{{comment.content}}</p>
        </div>
     
      <!-- ================== -->

    <!-- <div class="mother father">
        <div class="comments replies" v-for="com in comment.replies" :key="com.id">
            <div class="comments__container">
                <div class="comments__upvotes">
                    <button><img src="../assets/images/icon-plus.svg" alt=""></button>
                    <span>{{com.score}}</span>
                    <button><img src="../assets/images/icon-minus.svg" alt=""></button>
                </div>
                <div class="comments__descriptions">
                    <div class="comments__inside">
                        <span class="username__replies">
                            <img :src="require('@/assets/images/avatars/' + com.user.image.png)" alt="username-icon">
                            <span>{{com.user.username}}</span>
                            <span>{{com.createdAt}}</span>
                        </span>
                        <div class="reply">
                            reply
                        </div>
                    </div>
                    <h1>{{com.content}}</h1>
                </div>
            </div>
        </div>
    </div>     -->
  </div>
    <div class="replies" v-if="comment.replies">
        <div class="replies__container" v-for="com in comment.replies" :key="com.id">
            <div class="comments__upvotes">
                <span class="upvotes__icon">+</span>
                <span>{{com.score}}</span>
                <span class="upvotes__icon">-</span>
            </div> 
        <div class="comments__descriptions">
            <div class="comments__inside">
                <span class="username username__replies">
                    <img :src="require('@/assets/images/avatars/' + com.user.image.png)" alt="username-icon">
                    <span>{{com.user.username}}</span>
                    <span>{{com.createdAt}}</span>
                </span>
                <div class="reply">
                    <img src="../assets/images/icon-reply.svg" alt="reply-icon">
                    <span>Reply</span>
                </div>
            </div>
            <p>{{comment.content}}</p>
        </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    props: ['comments']
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

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

p{
    font-size: 16px;
}

*{
    font-family: var(--rubik);
}

.comments{
    display: block;
    width: 46rem;
    font-size: 0.5rem;
}

.comments__container{
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--White);
    margin-bottom: 2rem;
    padding: 1em;
    border-radius: 7px;


}

.comments__upvotes{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 5rem;    
    height: 5rem;
    border-radius: 8px;
    background: var(--Very-light-gray);
    color: var(--Moderate-blue);
    font-size: 1rem;
    font-weight: 500;
}

.comments__upvotes .upvotes__icon{
    color: var(--Light-grayish-blue);
    cursor: pointer;
    font-size: 1.4rem;
}

.comments__upvotes .upvotes__icon:hover{
    color: var(--Moderate-blue);
}


.comments__descriptions{
    display: block;
    padding: 1.8em 2em;
    text-align: start;
}

.comments__inside{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.comments__descriptions .username{
    display: flex;
    width: 32%;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
}


.comments__descriptions .username__replies{
    width: 38%;
}



.username img, .username__replies img {
    width: 2rem;
}

.username > :nth-child(2){
    font-weight: bold;
}
.username > :nth-child(3){
    font-size: 0.8rem;
}

.reply{
    display: flex;
    align-items: center;
}

.reply > *{
    margin-right: 1em;
    font-size: 1.5em;
    font-weight: bold;
    color: var(--Moderate-blue);
}

.replies {

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    margin-top: 2rem;
}

.replies__container{

    display: flex;
    align-items: center;
    width: 40rem;
    background: var(--White);
    margin-bottom: 2rem;
    padding: 1em;
    border-radius: 7px;
    font-size: 0.4rem;
}


</style>