<template>
  <CRow v-if="courses != null" class="row p-0">
    <div
      v-for="(course, index) in courses"
      :key="index"
      class="row col-sm-9 col-md-6 col-lg-4 mb-4 px-4"
    >
      <CCard class="shadow-sm p-0">
        <CCardHeader class="p-0">
          <div class="img-div">
            <CCardImage orientation="top" :src="Computer" class="h-100" />
          </div>
        </CCardHeader>
        <CCardBody class="pb-0 pt-1">
          <div>
            <router-link
              :to="{ name: 'Course Details', params: { id: course.id } }"
            >
              <b style="color: #3c4b64">{{ course.name }}</b> by Jules Akono
            </router-link>
          </div>
          <div class="py-2 pt-3 d-flex justify-content-between">
            <router-link
              :to="{ name: 'Course Meet', params: { id: course.id } }"
            >
              <CIcon
                style="color: #3b5998"
                class="mx-2"
                icon="cil-video"
                size="lg"
              />
            </router-link>
            <router-link
              :to="{ name: 'Course Details', params: { id: course.id } }"
            >
              <CIcon
                style="color: gold"
                class="mx-2"
                icon="cil-folderOpen"
                size="lg"
              />
            </router-link>
            <router-link
              :to="{ name: 'Course Chats', params: { id: course.id } }"
            >
              <CIcon class="mx-2" icon="cil-chat-bubble" size="lg" />
            </router-link>
          </div>
        </CCardBody>
      </CCard>
    </div>
  </CRow>
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
import { ref } from 'vue'
import Computer from '@/assets/images/computer_science.jpg'
import { getCourses } from '@/composables/Course'

export default {
  data() {},

  setup() {
    const item_selected = ref([])
    const all = ref(true)
    const { courses, load } = getCourses()

    load()

    return {
      item_selected,
      all,
      courses,
      Computer,
    }
  },

  methods: {
    downloadPdf(link) {
      window.open(link, '_blank')
    },
  },
}
</script>

<style>
.text_color {
  color: white;
}
.bar_color {
  background-color: white;
}

.completed {
  background: rgb(55, 33, 98);
  background: linear-gradient(
    90deg,
    rgba(55, 33, 98, 1) 0%,
    rgba(132, 40, 230, 1) 100%
  );
}
.img-div {
  height: 150px;
}

.img-div img {
  height: 150px;
}

a {
  color: dimgray;
  text-decoration: none;
}
</style>
