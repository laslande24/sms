<template>
  <div class="row" v-if="course != null">
    <div class="col-sm-12 col-md-6 col-lg-7">
      <h1>{{ course.name }}</h1>
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <CCard class="shadow-sm p-0">
            <CCardBody class="chapt pb-0 pt-1">
              <div>
                <h3>Chapters</h3>
              </div>
              <div>
                <p>{{ course.chapters.length }}</p>
              </div>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-5">
      <div class="pb-2">
        <div class="chat-div d-flex flex-column justify-content-between p-2">
          <div>
            <p>Good</p>
          </div>
          <div class="entry-div p-1">
            <CustomTextarea v-model="msg" :value="msg"></CustomTextarea>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div v-if="error != null">
      <CSpinner color="primary" style="width: 4rem; height: 4rem" />
    </div>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script>
import { getCourse } from '@/composables/Course'
import CustomTextarea from '@/components/CustomTextarea.vue'
import { ref } from 'vue'
export default {
  name: 'details',
  components: { CustomTextarea },
  component: [CustomTextarea],
  props: ['id'],
  setup(props) {
    const { error, course, load } = getCourse(props.id)
    const msg = ref(null)
    load()

    return {
      course,
      error,
      msg,
    }
  },
}
</script>

<style scoped>
.chapt p,
.chapt h3 {
  text-align: center;
}

.chapt p {
  font-size: 2rem;
}
.chat-div {
  background: white;
  height: 78vh;
}

.entry-div {
  min-height: 30px;
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 80%;
}
.entry-div textarea {
  width: 100%;
  resize: none;
  font-size: 0.8rem;
  border: none !important;
}

.entry-div textarea:focus {
  border: none !important;
  outline: none;
}
</style>
