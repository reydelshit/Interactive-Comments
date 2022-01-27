<template>
    <div v-for="rep in reply" :key="rep.id">
         <div v-for="r in rep" :key="r.id">
             <h2>{{r.content}}</h2>
         </div>
      </div>
</template>

<script>
export default {
    props: ['reply']
}
</script>

<style>

</style>