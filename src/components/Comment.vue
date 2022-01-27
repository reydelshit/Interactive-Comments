<template>
<div class="father">
  <div class="comments" v-for="comment in comments" :key="comment.id">  
    <div class="comments__container">
        <div class="comments__upvotes">
            <span>{{comment.score}}</span>

        </div>
      
        <div class="comments__descriptions">
            <span class="username">
                <h1>{{comment.user.username}}</h1>
                <p>{{comment.createdAt}}</p>
            </span>
 
            <h1>{{comment.content}}</h1>
        </div>
    </div>
     
      <!-- ================== -->

      <div v-for="com in comment.replies" :key="com.id">
         <h2>{{com.content}}</h2> 
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

.father{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.comments{

    display: flex;
    align-content: center;
    flex-direction: column;
    height: 9rem;
    width: 45rem;
    margin-bottom: 2rem;
    padding: 1em;

    font-size: 0.5rem;
    background: var(--White);
}

.comments__container{
    display: flex;
    flex-direction: row;
}

.comments__upvotes{

    width: 5rem;
    border-radius: 8px;
    background: var(--Light-grayish-blue);
}

.comments__descriptions{
    padding: 1.5em;
    text-align: start;
}

.comments__descriptions .username{
    display: flex;
    align-items: center;
}

</style>