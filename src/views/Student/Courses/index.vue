<template>
  <CRow v-if="courses != null" class="row p-0">
    <div
      v-for="(course, index) in courses"
      :key="index"
      class="row col-sm-10 col-md-6 col-lg-3 mb-4 px-4"
    >
      <CCard class="shadow-sm p-0">
        <CCardHeader>
          <div class="img-div">
            <img src="/img.jp" />
          </div>
        </CCardHeader>
        <CCardBody class="pb-0 pt-1">
          <div>
            <router-link
              :to="{ name: 'Course Details', params: { id: course.id } }"
            >
              {{ course.name }} by {{ course.name }}
            </router-link>
          </div>
          <div class="py-2 pt-3 d-flex justify-content-between">
            <a href="https://coreui.io">
              <CIcon class="mx-2" icon="cil-video" size="lg" />
            </a>
            <a href="https://coreui.io">
              <CIcon class="mx-2" icon="cil-folder" size="lg" />
            </a>
            <a href="https://coreui.io">
              <CIcon class="mx-2" icon="cil-chat-bubble" size="lg" />
            </a>
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
import { getCourses } from '@/composables/Course'

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          v_id: '01',
          name: 'Human Organic Biology ',
          lecturer: 'Doctor Luis Molde',
          progression: 10,
        },
      ],
    }
  },
  setup() {
    const item_selected = ref([])
    const all = ref(true)
    const { courses, load } = getCourses()

    load()

    return {
      item_selected,
      all,
      courses,
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
  height: 100px;
}

a {
  color: dimgray;
  text-decoration: none;
}
</style>
