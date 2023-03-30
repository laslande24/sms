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
            elt.image = course.data.image
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

const getExamQuestion = (id) => {
  const questions = ref(null)
  const exam = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get(base_link + '/exam/' + id)
      let res = await data

      if (!res.data.success) {
        console.log('exam', res.data.error)
        throw res.data.error
      }
      let ex = await res.data.data
      try {
        let ans = axios.get(base_link + '/course/' + ex.course)
        let course = (await ans).data
        if (course.success) {
          ex.course = course.data.name
          // elt.image = course.data.image
        }
      } catch (e) {
        //pass
      }
      exam.value = ex
    } catch (e) {
      error.value = e
      console.log('error', error.value)
    }
  }

  return { exam, questions, error, load }
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

const AddExam = () => {
  const addExamMsg = ref(null)
  const errorExam = ref(null)
  const loadExam = async (info) => {
    try {
      let data = await axios.post(base_link + '/exam/', info)
      let res = await data
      if (!res.data.success) {
        console.log('answer', res.data.error)
        throw res.data.error
      }
      addExamMsg.value = res.data.data
    } catch (e) {
      errorExam.value = e
      console.log('error', errorExam.value)
    }
  }

  return { addExamMsg, errorExam, loadExam }
}

const AddQuestion = () => {
  const addQuestMsg = ref(null)
  const errorQuest = ref(null)
  const loadQuest = async (info) => {
    try {
      let data = await axios.post(base_link + '/exam/', info)
      let res = await data
      if (!res.data.success) {
        console.log('answer', res.data.error)
        throw res.data.error
      }
      addQuestMsg.value = res.data.data
    } catch (e) {
      errorQuest.value = e
      console.log('error', errorQuest.value)
    }
  }

  return { addQuestMsg, errorQuest, loadQuest }
}

export { getExam, getExamQuestion, getAnswer, AddQuestion, AddExam }
