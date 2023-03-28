<template>
  <div
    :id="'question' + count + 1"
    class="container-fluid text-dark"
    style="padding: 60px 100px 20px"
  >
    <div class="card quest">
      <div class="card-header bg-success text-center text-white">
        <h2 class="fs-2">Question No {{ count + 1 }}</h2>
      </div>
      <div class="card-body">
        <div class="row text-center">
          <div class="col-12 col-md-10 mx-auto mt-1">
            <p class="fs-3">{{ question.text }}</p>
          </div>
          <div class="col-10 mx-auto">
            <div class="row g-2 text-start text-dark">
              <div
                class="col-md-6 rounded p-2"
                v-for="(option, key) in question.option"
                :key="key"
              >
                <div class="form-check">
                  <input
                    class="form-check-input"
                    v-model="answer"
                    type="radio"
                    :value="option.letter"
                  />
                  <label class="form-check-label" for="answerA">
                    {{ option.letter }}: {{ option.value }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="timer" role="status">
    <span>{{ duration }}</span>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ExamQuestion',
  props: ['count', 'question'],
  emits: ['end'],
  setup(props, { emit }) {
    const answer = ref('')
    const duration = ref(11)

    const timer = setInterval(() => {
      duration.value = duration.value - 1
      if (duration.value == -1) {
        clearInterval(timer)
        emit('end', answer)
      }

      if (duration.value < 7) {
        document.querySelector('.timer').classList.add('pulse')
      }
    }, 1000)
    return {
      answer,
      duration,
      timer,
    }
  },
}
</script>

<style scoped>
.quest {
  max-width: 900px;
  margin: auto;
}

.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  background-color: #63d563;
  transition: background-color 5s;
  font-size: 3rem;
  color: white;
  position: fixed;
  border-radius: 100%;
  top: 10px;
  right: 20px;
}

.pulse {
  background-color: red;
  border-radius: 50%;
  animation: animate 3s linear infinite;
}

@keyframes animate {
  0% {
    box-shadow: 0 0 0 0 rgb(255, 109, 74, 0.7), 0 0 0 0 rgb(255, 109, 74, 0.7);
  }
  40% {
    box-shadow: 0 0 0 50px rgb(255, 109, 74, 0), 0 0 0 0 rgb(255, 109, 74, 0.7);
  }
  80% {
    box-shadow: 0 0 0 50px rgb(255, 109, 74, 0), 0 0 0 30px rgb(255, 109, 74, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgb(255, 109, 74, 0), 0 0 0 30px rgb(255, 109, 74, 0);
  }
}
</style>
