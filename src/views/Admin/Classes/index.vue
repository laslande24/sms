<template>
  <CContainer>
    <CRow class="d-flex justify-content-center mb-4">
      <CCol xs="3">
        <CFormSelect @change="classChange">
          <option value="0">Select Class</option>
          <option value="1">One</option>
          <option value="2">Two</option>
        </CFormSelect>
      </CCol>
    </CRow>
    <CRow
      :lg="{ cols: 4 }"
      :md="{ cols: 3 }"
      :sm="{ cols: 2 }"
      :xs="{ cols: 1 }"
      class="g-2"
    >
      <CCol xs>
        <CCard color="success" text-color="white">
          <CCardBody>
            <CCardTitle>Form 1</CCardTitle>
            <CCardText class="mb-0">First Cycle</CCardText>
            <CCardText>Anglophone Section</CCardText>
            <CButton color="warning" href="">View details</CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard color="success" text-color="white">
          <CCardBody>
            <CCardTitle>Form 2</CCardTitle>
            <CCardText class="mb-0">First Cycle</CCardText>
            <CCardText>Anglophone Section</CCardText>
            <CButton color="warning" href="">View details</CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard color="success" text-color="white">
          <CCardBody>
            <CCardTitle>Form 3</CCardTitle>
            <CCardText class="mb-0">First Cycle</CCardText>
            <CCardText>Anglophone Section</CCardText>
            <CButton color="warning" href="">View details</CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard color="success" text-color="white">
          <CCardBody>
            <CCardTitle>Form 4</CCardTitle>
            <CCardText class="mb-0">First Cycle</CCardText>
            <CCardText>Anglophone Section</CCardText>
            <CButton color="warning" href="">View details</CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard color="success" text-color="white">
          <CCardBody>
            <CCardTitle>Form 5</CCardTitle>
            <CCardText class="mb-0">First Cycle</CCardText>
            <CCardText>Anglophone Section</CCardText>
            <CButton color="warning" href="">View details</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'index',
  methods: {
    classChange(event) {
      console.log(event.target.value)
    },
  },
  // data() {
  //   return {
  //     count: 8,
  //   }
  // },
}
</script>
