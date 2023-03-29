import { ref } from 'vue'
import axios from 'axios'
import { base_link } from '@/composables/config'

const addschool = () => {
  const message = ref(null)
  const error = ref(null)
  const load = async (info) => {
    try {
      let data = await axios.post(base_link + '/school/setting', info)
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

const register = () => {
  const message = ref(null)
  const error = ref(null)
  const load = async (info) => {
    console.log(info)
    try {
      let data = await axios.post(base_link + '/school', info)
      let res = await data
      if (!res.data.success) {
        console.log('School', res.data.error)
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

const login = () => {
  const message = ref(null)
  const error = ref(null)
  const load = async (info) => {
    try {
      let data = await axios.post(base_link + '/api/token/', info)
      let res = await data
      if (!res.data.success) {
        console.log('Part', res.data.error)
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

export { addschool, register, login }
