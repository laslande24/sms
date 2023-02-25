import { ref } from 'vue'
import axios from 'axios'

const base_link = 'http://localhost:8000' //'http://172.20.10.4:8000'
const getCourses = () => {
  const courses = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get(base_link + '/course')
      let res = await data
      if (!res.data.success) {
        console.log(res.data.error)
        throw res.data.error
      }
      courses.value = res.data.data

      console.log(data)
    } catch (e) {
      error.value = e
    }
  }

  return { courses, error, load }
}

const getCourse = (id) => {
  const course = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get(base_link + '/course/' + id)
      let res = await data
      if (!res.data.success) {
        console.log('course', res.data.error)
        throw res.data.error
      }
      course.value = res.data.data
    } catch (e) {
      error.value = e
      console.log('error', error.value)
    }
  }

  return { course, error, load }
}

const getCourseChapter = (id) => {
  const chapters = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get(base_link + '/course/' + id + '/chapter')
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

const getAssignment = () => {
  const assignments = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get(base_link + '/course/assignments')
      let res = await data
      if (!res.data.success) {
        console.log('course', res.data.error)
        throw res.data.error
      }
      assignments.value = res.data.data
    } catch (e) {
      error.value = e
      console.log('error', error.value)
    }
  }

  return { assignments, error, load }
}

export { getCourse, getCourses, getCourseChapter, getAssignment }
