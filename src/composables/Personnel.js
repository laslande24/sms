import { ref } from 'vue'
import axios from 'axios'
import { base_link } from '@/composables/config'

const getPersonnel = () => {
  const students = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get(base_link + '/student')
      let res = await data
      if (!res.data.success) {
        console.log('Student', res.data.error)
        throw res.data.error
      }
      students.value = res.data.data

      console.log(data)
    } catch (e) {
      error.value = e
    }
  }

  return { students, error, load }
}

const addPersonnel = () => {
  const message = ref(null)
  const saveError = ref(null)
  const save = async (student) => {
    try {
      let data = await axios.post(base_link + '/student/', student)
      let res = await data
      if (!res.data.success) {
        console.log('Student', res.data.error)
        throw res.data.error
      }
      message.value = res.data.data
    } catch (e) {
      saveError.value = e
      console.log('error', saveError.value)
    }
  }

  return { message, saveError, save }
}

const uploadStudent = (file) => {
  const chapters = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get(base_link + '/course/' + file + '/chapter')
      let res = await data
      if (!res.data.success) {
        console.log('course', res.data.error)
        throw res.data.error
      }
      chapters.value = res.data.data
      console.log(chapters.value)
    } catch (e) {
      error.value = e
      console.log('error', error.value)
    }
  }

  return { chapters, error, load }
}

export { getStudent, uploadStudent, addStudent }
