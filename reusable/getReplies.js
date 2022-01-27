import { ref } from '@vue/reactivity'


const getComment = () => {

    const comment = ref([])
    const err = ref(null)

    const fetchPost = async () => {
      try {
        let fetchData = await fetch('http://localhost:3000/comments/')
        if(!fetchData.ok){
          throw Error('bro stfu!')
        }
        comment.value = await fetchData.json()
      }
      catch(error){
        err.value = error.message
      }
    }
    return { comment, fetchPost, err}

}


export default getComment
