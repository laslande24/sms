<template>
  <CContainer>
    <CCard class="mb-3 border-light border-top-primary border-top-3">
      <CCardHeader class="bg-white">
        <CRow>
          <CCol sm="9" class="d-flex align-items-center">
            <h5>Questions</h5>
          </CCol>
          <CCol sm="3" class="d-sm-flex justify-content-sm-end">
            <CButton color="primary" @click="openModalQuestion"
              ><span class="text-white">Add Question</span></CButton
            >
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Type</CTableHeaderCell>
              <CTableHeaderCell scope="col">
                Number of questions
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" class="w-25">
                Action
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>MCQs</CTableDataCell>
              <CTableDataCell>2</CTableDataCell>
              <CTableDataCell>
                <CButton color="info" size="sm" variant="outline">
                  View All
                </CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Structurals</CTableDataCell>
              <CTableDataCell>2</CTableDataCell>
              <CTableDataCell>
                <CButton color="info" size="sm" variant="outline">
                  View All
                </CButton>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
    <CCard class="mb-3 border-light border-top-primary border-top-3">
      <CCardHeader class="bg-white">
        <CRow>
          <CCol sm="9" class="d-flex align-items-center">
            <h5>Exams</h5>
          </CCol>
          <CCol sm="3" class="d-sm-flex justify-content-sm-end">
            <CButton color="primary" @click="openModalExam"
              ><span class="text-white">Add Exam</span></CButton
            >
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="12">
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Duration</CTableHeaderCell>
                  <CTableHeaderCell scope="col"
                    >No of questions</CTableHeaderCell
                  >
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>First Term Exam</CTableDataCell>
                  <CTableDataCell>19-02-2020</CTableDataCell>
                  <CTableDataCell>2hrs</CTableDataCell>
                  <CTableDataCell>30</CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      color="info"
                      variant="outline"
                      size="sm"
                      class="me-2"
                    >
                      View
                    </CButton>
                    <CButton
                      color="warning"
                      variant="outline"
                      size="sm"
                      class="me-2"
                    >
                      Edit
                    </CButton>
                    <CButton color="danger" variant="outline" size="sm">
                      Delete
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CModal
      size="lg"
      backdrop="static"
      :visible="questionModal"
      @close="
        () => {
          questionModal = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Add New Question</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <div class="form-group mb-2">
            <CRow>
              <CCol sm="2">
                <CFormLabel for="questionText">Structure</CFormLabel>
              </CCol>
              <CCol sm="10">
                <CFormTextarea
                  id="questionText"
                  rows="3"
                  placeholder="Enter question text"
                ></CFormTextarea>
              </CCol>
            </CRow>
          </div>
          <div class="form-group mb-2">
            <CRow>
              <CCol sm="2">
                <CFormLabel for="questionType">Type</CFormLabel>
              </CCol>
              <CCol sm="10">
                <CFormSelect @change="onChoice($event)">
                  <option value="0">Choose type</option>
                  <option value="1">MCQ</option>
                  <option value="2">Structural</option>
                </CFormSelect>
              </CCol>
            </CRow>
          </div>
          <div v-if="questionType == 1" class="mb-2">
            <CCard class="border-light">
              <CCardBody class="text-center">
                <CCardTitle>MCQs</CCardTitle>
                <p><small>Tick the correct answer</small></p>
                <CRow class="g-2">
                  <CCol md="6">
                    <CInputGroup>
                      <CInputGroupText> 1: </CInputGroupText>
                      <CFormTextarea
                        id="questionChoice1"
                        rows="3"
                        placeholder="Enter first option"
                      ></CFormTextarea>
                    </CInputGroup>
                    <CFormCheck id="questionCheck1" />
                  </CCol>
                  <CCol md="6">
                    <CInputGroup>
                      <CInputGroupText> 2: </CInputGroupText>
                      <CFormTextarea
                        id="questionChoice2"
                        rows="3"
                        placeholder="Enter second option"
                      ></CFormTextarea>
                    </CInputGroup>
                    <CFormCheck id="questionCheck2" />
                  </CCol>
                  <CCol md="6">
                    <CInputGroup>
                      <CInputGroupText> 3: </CInputGroupText>
                      <CFormTextarea
                        id="questionChoice3"
                        rows="3"
                        placeholder="Enter third option"
                      ></CFormTextarea>
                    </CInputGroup>
                    <CFormCheck id="questionCheck3" />
                  </CCol>
                  <CCol md="6">
                    <CInputGroup>
                      <CInputGroupText> 4: </CInputGroupText>
                      <CFormTextarea
                        id="questionChoice4"
                        rows="3"
                        placeholder="Enter fourth option"
                      ></CFormTextarea>
                    </CInputGroup>
                    <CFormCheck id="questionCheck4" />
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </div>
          <div v-if="questionType == 2" class="form-group mb-2">
            <CCard class="border-light">
              <CCardBody>
                <CCardTitle class="text-center">Structural</CCardTitle>
                <CRow class="mb-2">
                  <CCol>
                    <CButton class="w-100" color="primary" @click="addField"
                      >Add</CButton
                    >
                  </CCol>
                  <CCol>
                    <CButton class="w-100" color="danger" @click="removeField"
                      ><span class="text-white">Remove</span></CButton
                    >
                  </CCol>
                </CRow>
                <CContainer v-for="key in subpartCount" :key="key">
                  <CRow class="mb-2">
                    <CCol md="10">
                      <CFormTextarea
                        :id="key"
                        v-model="subpartValues['question-' + key]"
                        placeholder="Enter sub question"
                        row="1"
                      ></CFormTextarea>
                    </CCol>
                    <CCol md="2"
                      ><CFormInput
                        type="number"
                        :id="key"
                        v-model="subpartMarks['mark-' + key]"
                        placeholder="Enter marks"
                    /></CCol>
                  </CRow>
                </CContainer>
              </CCardBody>
            </CCard>
          </div>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          @click="
            () => {
              questionModal = false
            }
          "
        >
          Close
        </CButton>
        <CButton color="primary">Save</CButton>
      </CModalFooter>
    </CModal>
    <CModal
      size="lg"
      backdrop="static"
      :visible="examModal"
      @close="
        () => {
          examModal = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>CREATE AN EXAM</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CRow>
            <CCol md="6">
              <CInputGroup class="mb-3">
                <CInputGroupText id="basic-addon1">#</CInputGroupText>
                <CFormInput
                  type="text"
                  v-model="quest.text"
                  placeholder="Name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
            </CCol>
            <CCol md="6">
              <CInputGroup>
                <CInputGroupText>
                  <i class="bi bi-book"></i>
                </CInputGroupText>
                <CFormSelect>
                  <option>Select Course</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </CFormSelect>
              </CInputGroup>
            </CCol>
            <CCol md="6">
              <CInputGroup class="mb-3">
                <CInputGroupText id="basic-addon2">
                  <i class="bi bi-calendar2"></i>
                </CInputGroupText>
                <CFormInput type="date" />
              </CInputGroup>
            </CCol>
            <CCol md="6">
              <CInputGroup class="mb-3">
                <CInputGroupText id="basic-addon3">
                  <i class="bi bi-clock"></i>
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Duration (in hours)"
                  aria-label="duration"
                  aria-describedby="basic-addon3"
                />
              </CInputGroup>
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          @click="
            () => {
              examModal = false
            }
          "
        >
          Close
        </CButton>
        <CButton color="primary" @click="switchToAddQuestion">Next</CButton>
      </CModalFooter>
    </CModal>
    <CModal
      size="lg"
      backdrop="static"
      :visible="questionToExamModal"
      @close="
        () => {
          questionToExamModal = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Add questions for: First Term Exams</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CRow>
            <CCol md="6">
              <CInputGroup class="mb-3">
                <CInputGroupText id="basic-addon1">#</CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          @click="
            () => {
              questionToExamModal = false
            }
          "
        >
          Close
        </CButton>
        <CButton color="primary">Save</CButton>
      </CModalFooter>
    </CModal>
  </CContainer>
  <CToaster placement="top-end" visible>
    <CToast class="bg-danger" v-if="saveError != null">
      <CToastHeader closeButton>
        <span class="me-auto fw-bold">ERROR</span>
      </CToastHeader>
      <CToastBody>
        <div class="" v-for="(elt, key) in saveError" :key="key">
          <p>{{ key }}</p>
          <p class="ms-3" v-for="(val, i) in elt" :key="i">{{ val }}</p>
        </div>
      </CToastBody>
    </CToast>
    <CToast class="bg-danger" v-if="deleteError != null">
      <CToastHeader closeButton>
        <span class="me-auto fw-bold">ERROR</span>
      </CToastHeader>
      <CToastBody>
        <div class="" v-for="(elt, key) in saveError" :key="key">
          <p>{{ key }}</p>
          <p class="ms-3" v-for="(val, i) in elt" :key="i">{{ val }}</p>
        </div>
      </CToastBody>
    </CToast>
    <CToast class="bg-success" v-if="message != null">
      <CToastHeader closeButton>
        <span class="me-auto fw-bold">SUCCESS</span>
      </CToastHeader>
      <CToastBody>
        {{ message }}
      </CToastBody>
    </CToast>
    <CToast class="bg-success" v-if="msgFile != null">
      <CToastHeader closeButton>
        <span class="me-auto fw-bold">SUCCESS</span>
      </CToastHeader>
      <CToastBody>
        {{ msgFile }}
      </CToastBody>
    </CToast>
  </CToaster>
</template>

<script>
//import { getExam, AddQuestion } from '@/composables/Exam'
// import { computed, ref } from 'vue'
// import { dateFormat } from '@/utils/dateFormat.js'

export default {
  name: 'index',
  data() {
    return {
      questionModal: false,
      examModal: false,
      questionToExamModal: false,
      questionType: 0,
      subpartCount: 0,
      subpartValues: {},
      subpartMarks: {},
    }
  },
  methods: {
    openModalQuestion() {
      this.resetInputQuestion()
      this.questionModal = true
    },
    openModalExam() {
      this.resetInpuExam()
      this.examModal = true
    },
    resetInputQuestion() {
      this.subpartCount = 0
      this.questionType = 0
      this.subpartValues = {}
      this.subpartMarks = {}
    },
    resetInpuExam() {
      this.subpartCount = 0
      this.questionType = 0
      this.subpartValues = {}
      this.subpartMarks = {}
    },
    // switchToAddQuestion() {

    // },
    onChoice(event) {
      this.questionType = event.target.value
      console.log(event.target.value)
    },
    addField() {
      this.subpartCount++
    },
    removeField() {
      this.subpartCount--
    },
  },
  // setup() {
  //   const { error, exams, load } = getExam()
  //   const { addQuestMsg, loadQuest, errorQuest } = AddQuestion()
  //   const quest = ref({
  //     competence: '',
  //     courses: '',
  //     text: '',
  //     level: '1',
  //     type: null,
  //     duration: null,
  //     part: null,
  //     option: [
  //       {
  //         value: '',
  //         letter: '',
  //         state: false,
  //       },
  //     ],
  //   })
  //   const saveQuestion = () => {
  //     l
  //   }
  //   const tabPanePillsActiveKey = ref(1)
  //   const visibleVerticallyCenteredDemo = ref(false)
  //   const ass = ref(null)
  //   const data = computed(() => {
  //     if (exams.value != null) {
  //       if (tabPanePillsActiveKey.value == 1) {
  //         return exams.value.filter(
  //           (value) => new Date(value.date).getTime() >= new Date().getTime(),
  //         )
  //       } else {
  //         return exams.value.filter(
  //           (value) => new Date(value.date).getTime() < new Date().getTime(),
  //         )
  //       }
  //     } else {
  //       return []
  //     }
  //   })
  //   const modal = (index) => {
  //     ass.value = data.value[index]
  //     visibleVerticallyCenteredDemo.value = true
  //   }
  //   const startFormat = (date, time) => {
  //     let d = new Date(date + 'T' + time)
  //     return dateFormat(d, 'd mmm, h:MM tt')
  //   }
  //
  //   return {
  //     error,
  //     startFormat,
  //     data,
  //     quest,
  //     visibleVerticallyCenteredDemo,
  //     modal,
  //   }
  // },
}
</script>

<style scoped>
.img-div {
  height: 120px;
  position: relative;
}

.img-div img {
  height: 120px;
  position: absolute;
  width: 100%;
  border-bottom-left-radius: 10px;
}
.img-div div {
  height: 120px;
  position: absolute;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  background: rgba(133, 126, 126, 0.6);
  /*top: 40%;*/
  /*bottom: 40%;*/
  /*left: 35%;*/
  /*right: 35%;*/
}
.img-div div p {
  font-size: 1.4rem;
  color: white;
}

.exam-card {
  border-bottom-left-radius: 10px;
}
</style>
