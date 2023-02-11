<template>
  <CRow class="">
    <CCol :sm="3">
      <CCol class="d-flex align-items-center justify-content-between mb-4">
        <CCardTitle>Active Chats</CCardTitle>
        <CIcon class="mx-2" icon="cil-plus" size="lg" />
      </CCol>
      <CForm class="d-flex align-items-center justify-content-between mb-4">
        <CFormInput type="search" class="" placeholder="Search people" />
        <CCard class="p-1">
          <CIcon class="mx-1" icon="cil-search" size="xl" />
        </CCard>
      </CForm>
      <div class="d-flex flex-column gap-3">
        <CCol class="d-flex">
          <div class="d-flex position-relative">
            <CAvatar :src="avatar" size="lg" />
            <div
              class="bg-success rounded-circle position-relative"
              style="width: 0.8rem; height: 0.8rem; top: 2.2rem; right: 0.8rem"
            ></div>
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <CCardTitle class="fs-6">Christina Jones</CCardTitle>
            <div class="d-flex align-items-center justify-content-between">
              <p class="text-success" style="font-size: small">online</p>
              <p class="" style="font-size: small">7:30 AM</p>
            </div>
          </div>
        </CCol>
        <CCol class="d-flex">
          <div class="d-flex position-relative">
            <CAvatar :src="avatar1" size="lg" />
            <div
              class="bg-danger rounded-circle position-relative"
              style="width: 0.8rem; height: 0.8rem; top: 2.2rem; right: 0.8rem"
            ></div>
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <CCardTitle class="fs-6">Sasha Cohen</CCardTitle>
            <div class="d-flex align-items-center justify-content-between">
              <p class="text-danger" style="font-size: small">offline</p>
              <p class="" style="font-size: small">7:45 AM</p>
            </div>
          </div>
        </CCol>
        <CCol class="d-flex">
          <div class="d-flex position-relative">
            <CAvatar :src="avatar2" size="lg" />
            <div
              class="bg-success rounded-circle position-relative"
              style="width: 0.8rem; height: 0.8rem; top: 2.2rem; right: 0.8rem"
            ></div>
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <CCardTitle class="fs-6">Teddy Kuate</CCardTitle>
            <div class="d-flex align-items-center justify-content-between">
              <p class="text-success" style="font-size: small">online</p>
              <p class="" style="font-size: small">5:30 AM</p>
            </div>
          </div>
        </CCol>
        <CCol class="d-flex">
          <div class="d-flex position-relative">
            <CAvatar :src="avatar3" size="lg" />
            <div
              class="bg-success rounded-circle position-relative"
              style="width: 0.8rem; height: 0.8rem; top: 2.2rem; right: 0.8rem"
            ></div>
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <CCardTitle class="fs-6">Jef Dam</CCardTitle>
            <div class="d-flex align-items-center justify-content-between">
              <p class="text-success" style="font-size: small">online</p>
              <p class="" style="font-size: small">5:30 AM</p>
            </div>
          </div>
        </CCol>
      </div>
    </CCol>
    <CCol :sm="7" class="p-0">
      <CCard style="background-color: #f9fafc" class="h-100">
        <CCardHeader style="background-color: #dbe5ed">Group Chat</CCardHeader>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText
            >With supporting text below as a natural lead-in to additional
            content.</CCardText
          >
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :sm="2"></CCol>
  </CRow>
</template>

<script>
import avatar from '@/assets/images/avatars/4.jpg'
import avatar1 from '@/assets/images/avatars/3.jpg'
import avatar2 from '@/assets/images/avatars/6.jpg'
import avatar3 from '@/assets/images/avatars/10.jpg'
import { CCardTitle } from '@coreui/vue'
export default {
  name: 'ChatGroup',
  setup() {
    return {
      avatar: avatar,
      avatar1: avatar1,
      avatar2: avatar2,
      avatar3: avatar3,
    }
  },
  components: { CCardTitle },
}
</script>
