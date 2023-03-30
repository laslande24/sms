<template>
  <div class="row" v-if="course != null">
    <div style="background: white; min-height: 78vh" class="col-sm-12 mp pb-4">
      <div>
        <div class="d-flex justify-content-between">
          <h3 style="color: #3c4b64" class="m-2">
            {{ course.name.toUpperCase() }}
          </h3>
          <div class="pt-3 pe-4">
            <router-link :to="{ name: 'Media', params: { id: course.id } }">
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
            <router-link
              class="meet"
              :to="{ name: 'Teacher Meet', params: { id: course.id } }"
            >
              <span class=""></span>
              <CIcon
                style="color: crimson"
                class="mx-2"
                icon="cil-video"
                size="lg"
              />
            </router-link>
          </div>
        </div>

        <br />
        <div class="row details">
          <div class="col-sm-4 col-md-4">
            <label>Lecturer:</label>
            <p class="ps-2">{{ course.lecture }}Jules Akono</p>
          </div>
          <div class="col-sm-4 col-md-4">
            <label>Code:</label>
            <p class="ps-2">{{ course.code.toUpperCase() }}</p>
          </div>
          <div class="col-sm-6 col-md-4">
            <label>Category:</label>
            <p class="ps-2">{{ course.category.toUpperCase() }}</p>
          </div>
          <div class="col-sm-12 col-md-6">
            <label>Objective:</label>
            <p class="ps-2">{{ course.objective }}</p>
          </div>
          <div class="col-sm-12 col-md-6">
            <label>Description:</label>
            <p class="ps-2">{{ course.description }}</p>
          </div>
        </div>
        <br />
        <CRow>
          <CCol class="py-2 col-sm-6 col-md-4">
            <CWidgetStatsF
              color="primary"
              title="Chapters"
              v-bind:value="course.chapters.length"
            >
              <template #icon>
                <CIcon icon="cil-listRich" size="xl" />
              </template>
              <template #footer>
                <div class="d-flex justify-content-between">
                  <router-link
                    :to="{ name: 'Course Chapter', params: { id: course.id } }"
                  >
                    View more
                    <CIcon icon="cil-arrow-right" class="ms-auto" width="16" />
                  </router-link>
                  <button
                    @click="
                      () => {
                        visibleVerticallyCenteredDemo = true
                      }
                    "
                    class="btn btn-primary btn-sm"
                  >
                    Add Chapter
                  </button>
                </div>
              </template>
            </CWidgetStatsF>
          </CCol>
          <CCol class="py-2 col-sm-6 col-md-4">
            <CWidgetStatsF color="info" title="Past Papers">
              <template #icon>
                <CIcon icon="cil-copy" size="xl" />
              </template>
              <template #footer>
                <div class="d-flex justify-content-between">
                  <CLink
                    class="font-weight-bold font-xs text-medium-emphasis"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon="cil-arrow-right" class="ms-auto" width="16" />
                  </CLink>
                  <button
                    @click="
                      () => {
                        visibleVerticallyCenteredDemo = true
                      }
                    "
                    class="btn btn-primary btn-sm"
                  >
                    Add PastPaper
                  </button>
                </div>
              </template>
            </CWidgetStatsF>
          </CCol>
          <CCol class="py-2 col-sm-6 col-md-4">
            <CWidgetStatsF
              color="warning"
              title="Students"
              :value="course.students.length"
            >
              <template #icon>
                <CIcon icon="cil-people" size="xl" />
              </template>
              <template #footer>
                <CLink
                  class="font-weight-bold font-xs text-medium-emphasis"
                  href="https://coreui.io/"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  View more
                  <CIcon icon="cil-arrow-right" class="ms-auto" width="16" />
                </CLink>
              </template>
            </CWidgetStatsF>
          </CCol>
          <CCol class="py-2 col-sm-6 col-md-4">
            <CWidgetStatsF
              color="warning"
              title="Practicals"
              :value="course.students.length"
            >
              <template #icon>
                <CIcon icon="cil-settings" size="xl" />
              </template>
              <template #footer>
                <router-link
                  class="font-weight-bold font-xs text-medium-emphasis"
                  :to="{ name: 'Course Practicals', params: { id: course.id } }"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  View more
                  <CIcon icon="cil-arrow-right" class="ms-auto" width="16" />
                </router-link>
              </template>
            </CWidgetStatsF>
          </CCol>
          <CCol class="py-2 col-sm-6 col-md-4">
            <CWidgetStatsF
              color="success"
              title="Local Languages"
              :value="course.students.length"
            >
              <template #icon>
                <CIcon icon="cil-translate" size="xl" />
              </template>
              <template #footer>
                <router-link
                  class="font-weight-bold font-xs text-medium-emphasis"
                  :to="{
                    name: 'Student Translations',
                  }"
                  rel="noopener norefferer"
                >
                  View more
                  <CIcon icon="cil-arrow-right" class="ms-auto" width="16" />
                </router-link>
              </template>
            </CWidgetStatsF>
          </CCol>
        </CRow>
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

  <CModal
    alignment="center"
    :visible="visibleVerticallyCenteredDemo"
    @close="
      () => {
        visibleVerticallyCenteredDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Add PastPaper</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm>
        <input type="text" placeholder="name " class="form-control mb-2" />
        <input
          type="file"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="choice file"
        />
      </CForm>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleVerticallyCenteredDemo = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
  <CModal
    alignment="center"
    :visible="visibleVerticallyCenteredDemo"
    @close="
      () => {
        visibleVerticallyCenteredDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>New Chapter</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm>
        <CFormInput
          type="file"
          id="exampleFormControlInput1"
          :label="ass.name"
          placeholder="choice file"
        />
      </CForm>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleVerticallyCenteredDemo = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script>
import { getCourse } from '@/composables/Course'

import { ref } from 'vue'

export default {
  name: 'details',
  components: {},
  props: ['id'],
  setup(props) {
    const { error, course, load } = getCourse(props.id)
    const visibleVerticallyCenteredDemo = ref(false)
    const visibleVerticallyCentered = ref(false)
    const msg = ref(null)
    load()

    return {
      course,
      error,
      msg,
      visibleVerticallyCenteredDemo,
      visibleVerticallyCentered,
    }
  },
}
</script>

<style scoped>
.details p {
  width: 90%;
  color: #3c4b64;
  font-weight: bold;
}
.details label {
  font-weight: lighter;
  width: 90%;
}
.meet {
  position: relative;
}

.meet > span {
  height: 5px;
  width: 5px;
  background: lime;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 5px;
}
</style>
