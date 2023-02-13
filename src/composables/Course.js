import { ref } from 'vue'
import axios from 'axios'

const getCourses = () => {
  const courses = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get('http://127.0.0.1:8000/course')
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
      let data = await axios.get('http://127.0.0.1:8000/course/' + id)
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
      let data = await axios.get(
        'http://127.0.0.1:8000/course/' + id + '/chapter',
      )
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

export { getCourse, getCourses, getCourseChapter }
