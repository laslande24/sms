<template>
  <div class="container">
    <CRow>
      <CCol :lg="6" class="bg-white py-2">
        <h5 class="text-center my-2">Personality Breakdown</h5>
        <CRow class="g-0">
          <CCol :xs="3">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <i class="bi bi-tools"></i>
              <small>Action Taker</small>
            </div>
          </CCol>
          <CCol :xs="9">
            <CProgress :height="50" class="mb-3">
              <CProgressBar :value="25"
                ><span class="fs-5">25%</span></CProgressBar
              >
            </CProgress>
          </CCol>
        </CRow>
        <CRow class="g-0">
          <CCol :xs="3">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <i class="bi bi-graph-up-arrow"></i>
              <small>Analyzer</small>
            </div>
          </CCol>
          <CCol :xs="9">
            <CProgress :height="50" class="mb-3">
              <CProgressBar color="info" :value="50"
                ><span class="fs-5">50%</span></CProgressBar
              >
            </CProgress>
          </CCol>
        </CRow>
        <CRow class="g-0">
          <CCol :xs="3">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <i class="bi bi-eyeglasses"></i>
              <small>Visionary</small>
            </div>
          </CCol>
          <CCol :xs="9">
            <CProgress :height="50" class="mb-3">
              <CProgressBar color="warning" :value="70"
                ><span class="fs-5">70%</span></CProgressBar
              >
            </CProgress>
          </CCol>
        </CRow>
        <CRow class="g-0">
          <CCol :xs="3">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <i class="bi bi-calendar"></i>
              <small>Planner</small>
            </div>
          </CCol>
          <CCol :xs="9">
            <CProgress :height="50" class="mb-3">
              <CProgressBar color="secondary" :value="48">
                <span class="fs-5">48%</span>
              </CProgressBar>
            </CProgress>
          </CCol>
        </CRow>
        <CRow class="g-0">
          <CCol :xs="3">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <i class="bi bi-tsunami"></i>
              <small>Naturalist</small>
            </div>
          </CCol>
          <CCol :xs="9">
            <CProgress :height="50" class="mb-3">
              <CProgressBar color="success" :value="75">
                <span class="fs-5">75%</span>
              </CProgressBar>
            </CProgress>
          </CCol>
        </CRow>
        <CRow class="g-0">
          <CCol :xs="3">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <i class="bi bi-people"></i>
              <small>Mentor</small>
            </div>
          </CCol>
          <CCol :xs="9">
            <CProgress :height="50" class="mb-3">
              <CProgressBar color="danger" :value="80">
                <span class="fs-5">80%</span>
              </CProgressBar>
            </CProgress>
          </CCol>
        </CRow>
        <CRow class="g-0">
          <CCol :xs="3">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <i class="bi bi-vector-pen"></i>
              <small>Inventor</small>
            </div>
          </CCol>
          <CCol :xs="9">
            <CProgress :height="50" class="mb-3">
              <CProgressBar color="dark" :value="60">
                <span class="fs-5">60%</span>
              </CProgressBar>
            </CProgress>
          </CCol>
        </CRow>
      </CCol>
      <CCol :lg="6" class="mb-4 text-center">
        <p class="mt-2">
          Your <CBadge color="danger">Highest</CBadge> Weakness is:
        </p>
        <CButton color="primary" class="w-100"
          >Mathemtics <CBadge color="danger">40%</CBadge></CButton
        >
        <p class="mt-2">
          Your <CBadge color="warning">Moderately</CBadge> Weakness is:
        </p>
        <CButton color="primary" class="w-100"
          >Physics <CBadge color="danger">50%</CBadge></CButton
        >
        <p class="mt-2">
          Your <CBadge color="info">Least</CBadge> Weakness is:
        </p>
        <CButton color="primary" class="w-100"
          >Chemistry <CBadge color="danger">80%</CBadge></CButton
        >
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'Weakness',
}
</script>
