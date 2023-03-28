<template>
  <CContainer>
    <CCard>
      <CCardHeader>Questions</CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="4">
            <CCard>
              <CCardHeader>ADD QUESTION</CCardHeader>
              <CCardBody>
                <CForm>
                  <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    label="Email address"
                    placeholder="name@example.com"
                    text="Must be 8-20 characters long."
                  />
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md="8">
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>Jacob</CTableDataCell>
                  <CTableDataCell>Thornton</CTableDataCell>
                  <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                  <CTableDataCell>@twitter</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>Exams</CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="4">
            <CCard>
              <CCardHeader>ADD AN EXAM</CCardHeader>
              <CCardBody>
                <CForm>
                  <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    label="Email address"
                    placeholder="name@example.com"
                    text="Must be 8-20 characters long."
                  />
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md="8">
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>Jacob</CTableDataCell>
                  <CTableDataCell>Thornton</CTableDataCell>
                  <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                  <CTableDataCell>@twitter</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </CContainer>
</template>

<script>
import { getExam } from '@/composables/Exam'
import { computed, ref } from 'vue'
import { dateFormat } from '@/utils/dateFormat.js'

export default {
  name: 'index',
  data() {
    return {}
  },
  components: {},
  setup() {
    const { error, exams, load } = getExam()
    const tabPanePillsActiveKey = ref(1)
    const visibleVerticallyCenteredDemo = ref(false)
    const ass = ref(null)
    load()
    const data = computed(() => {
      if (exams.value != null) {
        if (tabPanePillsActiveKey.value == 1) {
          return exams.value.filter(
            (value) => new Date(value.date).getTime() >= new Date().getTime(),
          )
        } else {
          return exams.value.filter(
            (value) => new Date(value.date).getTime() < new Date().getTime(),
          )
        }
      } else {
        return []
      }
    })
    const modal = (index) => {
      ass.value = data.value[index]
      visibleVerticallyCenteredDemo.value = true
    }
    const startFormat = (date, time) => {
      let d = new Date(date + 'T' + time)
      return dateFormat(d, 'd mmm, h:MM tt')
    }

    return {
      error,
      startFormat,
      data,
      ass,
      tabPanePillsActiveKey,
      visibleVerticallyCenteredDemo,
      modal,
    }
  },
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
