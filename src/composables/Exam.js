import { ref } from 'vue'
import axios from 'axios'
import { base_link } from '@/composables/config'
const getExam = () => {
  const exams = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get(base_link + '/exam', {
        params: {},
      })
      let res = await data
      if (!res.data.success) {
        console.log('exam', res.data.error)
        throw res.data.error
      }

      let items = await res.data.data

      for (const elt of items) {
        try {
          let ans = axios.get(base_link + '/course/' + elt.course)
          let course = (await ans).data
          if (course.success) {
            elt.course = course.data.name
          }
        } catch (e) {
          //pass
        }
      }

      exams.value = items
    } catch (e) {
      error.value = e
      console.log('error', error.value)
    }
  }

  return { exams, error, load }
}

const getQuestion = () => {
  const question = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get(base_link + '/exam/question')
      let res = await data
      if (!res.data.success) {
        console.log('question', res.data.error)
        throw res.data.error
      }
      question.value = res.data.data
    } catch (e) {
      error.value = e
      console.log('error', error.value)
    }
  }

  return { question, error, load }
}

const getAnswer = () => {
  const answer = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get(base_link + '/exam/answer')
      let res = await data
      if (!res.data.success) {
        console.log('answer', res.data.error)
        throw res.data.error
      }
      answer.value = res.data.data
    } catch (e) {
      error.value = e
      console.log('error', error.value)
    }
  }

  return { answer, error, load }
}

export { getExam, getQuestion, getAnswer }
