import { ref } from 'vue'
import axios from 'axios'
import { base_link, errorMessage } from '@/composables/config'

const getStudent = () => {
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

const addStudent = () => {
  const message = ref(null)
  const saveError = ref(null)
  const save = async (student) => {
    try {
      let data = await axios.post(base_link + '/student/', student)
      let res = await data
      if (!res.data.success) {
        console.log('Student', res.data.errors)
        throw res.data.errors
      }
      message.value = res.data.data
    } catch (e) {
      saveError.value = errorMessage(e)
      console.log('error', saveError.value)
    }
  }

  return { message, saveError, save }
}

const deleteStudent = () => {
  const msg = ref(null)
  const deleteError = ref(null)
  const loadDelete = async (id) => {
    try {
      let data = await axios.delete(base_link + '/student/' + id)
      let res = await data
      if (!res.data.success) {
        console.log('course', res.data.error)
        throw res.data.error
      }
      msg.value = res.data.data
      console.log(msg.value)
    } catch (e) {
      deleteError.value = e
      console.log('error', deleteError.value)
    }
  }

  return { msg, deleteError, loadDelete }
}
const uploadStudent = () => {
  const msgFile = ref(null)
  const errorFile = ref(null)
  const upload = async (id) => {
    try {
      let data = await axios.post(base_link + '/student/upload', id, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      let res = await data
      if (!res.data.success) {
        console.log('course', res.data.error)
        throw res.data.error
      }
      msgFile.value = res.data.data
    } catch (e) {
      errorFile.value = e
      console.log('error', errorFile.value)
    }
  }

  return { msgFile, errorFile, upload }
}

export { getStudent, uploadStudent, addStudent, deleteStudent }