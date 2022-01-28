<template>
    <div v-for="rep in reply" :key="rep">
        <h1>{{rep.username}}</h1>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
// import { onMounted } from '@vue/runtime-core'

export default {
    setup(){
    const reply = ref([])
    const err = ref(null)

    onMounted(() => {
        console.log(reply)


    })
    const fetchPost = async () => {
      try {
        let fetchData = await fetch('http://localhost:3000/currentUser')
        if(!fetchData.ok){
          throw Error('bro stfu!')
        }
        reply.value = await fetchData.json()
      }
      catch(error){
        err.value = error.message
      }
    }
    fetchPost()

    return { reply, err}
    }


}
</script>

<style>

</style>