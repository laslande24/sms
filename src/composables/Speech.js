import { ref } from 'vue'
import axios from 'axios'
import { base_link } from '@/composables/config'
const tranlate = () => {
  const message = ref(null)
  const error = ref(null)
  const load = async (info) => {
    try {
      let data = await axios.post(base_link + '/language/', info)
      let res = await data
      if (!res.data.success) {
        console.log('Student', res.data.error)
        throw res.data.error
      }

      message.value = res.data.data

      console.log(data)
    } catch (e) {
      error.value = e
    }
  }

  return { message, error, load }
}

export { tranlate }
