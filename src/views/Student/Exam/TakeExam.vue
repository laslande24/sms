<template>
  <div v-if="exam != null">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li
            class="nav-item"
            v-for="(question, key) in exam.question"
            :key="key"
          >
            <a class="nav-link" :href="'#question1' + key + 1"
              >Q{{ key + 1 }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <br />
    <div style="max-width: 900px; margin: auto" class="mt-1">
      <h1 class="my-2 text-center">{{ exam.name }}</h1>
      <h4 class="text-center">{{ exam.course }}</h4>
      <p class="my-1 text-center" style="font-size: 1.2rem">
        <CIcon
          style="color: #3b5998"
          class="me-2"
          icon="cil-history"
          size="lg"
        />2H30{{ exam.duration }}
      </p>
    </div>
    <ExamQuestion
      v-if="!end_exam"
      :key="count"
      @end="getAnswer"
      :count="count"
      :question="current"
    ></ExamQuestion>

    <div v-else class="mt-5">
      <h2 class="text-center">Exam Ended!</h2>
    </div>
  </div>
  <div v-else>
    <h3>Exam Not Available</h3>
  </div>
</template>

<script>
import ExamQuestion from '@/components/ExamQuestion.vue'
import { ref, computed } from 'vue'
import { getExamQuestion } from '@/composables/Exam'

export default {
  name: 'TakeExam',
  components: { ExamQuestion },
  props: ['id'],
  setup(props) {
    const { exam, load, error } = getExamQuestion(props.id)
    const count = ref(0)
    const answers = ref([])
    const end_exam = ref(false)

    load()
    const current = computed(() => {
      if (exam.value != null) {
        return exam.value.question[count.value]
      }
      return {}
    })

    const getAnswer = (value) => {
      answers.value.push({
        id: current.value.id,
        answer: value.value,
      })
      if (count.value < exam.value.question.length - 1) {
        count.value = count.value + 1
      } else {
        end_exam.value = true
      }
    }

    return {
      exam,
      getAnswer,
      error,
      end_exam,
      count,
      current,
    }
  },
}
</script>

<style scoped></style>
