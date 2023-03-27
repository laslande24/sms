<template>
  <CRow v-if="courses != null" class="row p-0">
    <div
      v-for="(course, index) in courses"
      :key="index"
      class="row col-sm-9 col-md-6 col-lg-4 mb-4 px-4"
    >
      <CCard class="shadow-sm p-0">
        <CCardBody class="pb-0 pt-1">
          <div>
            <router-link
              :to="{ name: 'Course Details', params: { id: course.id } }"
            >
              <b style="color: #3c4b64">{{ course.name }}</b>
            </router-link>
          </div>
          <div class="py-2 pt-3 d-flex justify-content-between">
            <router-link
              :to="{ name: 'Add Questions', params: { id: course.id } }"
            >
              <CIcon :icon="icon.cilList" size="xl" />
            </router-link>
          </div>
        </CCardBody>
      </CCard>
    </div>
  </CRow>
</template>

<script>
import { getCourses } from '@/composables/Course'
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'

export default {
  components: {
    CIcon,
  },
  setup() {
    const { courses, load } = getCourses()

    load()

    return {
      courses,
      icon,
    }
  },
}
</script>

<style></style>
