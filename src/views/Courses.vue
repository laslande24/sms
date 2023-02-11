<template>
  <CRow class="d-flex flex-wrap p-0">
    <div class="d-flex gap-3 mb-4" style="width: 23.4rem">
      <CCard style="width: 12rem" class="card-bg card-shadow p-0">
        <CCardBody class="p-2">
          <CCardTitle class="text_color" style="font-size: 70px">01</CCardTitle>
          <CCardText class="text_color mb-1">completed</CCardText>
          <CProgress :height="7">
            <CProgressBar :value="100" class="bar_color"></CProgressBar>
          </CProgress>
        </CCardBody>
      </CCard>
      <div style="width: 18rem">
        <CCardTitle style="font-size: 30px"
          >Introduction to Learning Math</CCardTitle
        >
        <CCardText>By Banish Charvil</CCardText>
      </div>
    </div>
    <div class="d-flex gap-3 mb-4" style="width: 23.4rem">
      <CCard style="width: 12rem" class="card-bg card-shadow p-0">
        <CCardBody class="p-2">
          <CCardTitle class="text_color" style="font-size: 70px">02</CCardTitle>
          <CCardText class="text_color mb-1">Progress 31%</CCardText>
          <CProgress :height="7">
            <CProgressBar :value="31" class="bar_color"></CProgressBar>
          </CProgress>
        </CCardBody>
      </CCard>
      <div style="width: 18rem">
        <CCardTitle style="font-size: 30px"
          >The History of cube and cube root</CCardTitle
        >
        <CCardText>By Tom Holland</CCardText>
      </div>
    </div>
    <div class="d-flex gap-3 mb-4" style="width: 23.4rem">
      <CCard style="width: 12rem" class="card-bg card-shadow p-0">
        <CCardBody class="p-2">
          <CCardTitle class="text_color" style="font-size: 70px">03</CCardTitle>
          <CCardText class="text_color mb-1">Progress 63%</CCardText>
          <CProgress :height="7">
            <CProgressBar :value="63" class="bar_color"></CProgressBar>
          </CProgress>
        </CCardBody>
      </CCard>
      <div style="width: 18rem">
        <CCardTitle style="font-size: 30px"
          >The History of cube and cube root</CCardTitle
        >
        <CCardText>By Tom Holland</CCardText>
      </div>
    </div>
    <div class="d-flex gap-3 mb-4" style="width: 23.4rem">
      <CCard style="width: 12rem" class="card-bg card-shadow p-0">
        <CCardBody class="p-2">
          <CCardTitle class="text_color" style="font-size: 70px">04</CCardTitle>
          <CCardText class="text_color mb-1">Progress 47%</CCardText>
          <CProgress :height="7">
            <CProgressBar :value="47" class="bar_color"></CProgressBar>
          </CProgress>
        </CCardBody>
      </CCard>
      <div style="width: 18rem">
        <CCardTitle style="font-size: 30px"
          >The History of cube and cube root</CCardTitle
        >
        <CCardText>By Tom Holland</CCardText>
      </div>
    </div>
  </CRow>
</template>

<style>
.text_color {
  color: white;
}
.bar_color {
  background-color: white;
}
</style>
