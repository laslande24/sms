<template>
  <div>
    <!--    <CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3 }">-->
    <!--      <CCard style="width: 15rem" class="p-0">-->
    <!--        <CCardImage orientation="top" :src="Computer" class="h-100" />-->
    <!--        <CCardBody class="p-2">-->
    <!--          <CCardTitle>Computer Science</CCardTitle>-->
    <!--          <CCardText class="mb-1">21 h 30min</CCardText>-->
    <!--          <CCardText class="mb-1">By Doctor Jacob</CCardText>-->
    <!--          <CProgress style="height: 10px; margin-bottom: 5px">-->
    <!--            <CProgressBar :value="25" />-->
    <!--          </CProgress>-->
    <!--        </CCardBody>-->
    <!--      </CCard>-->
    <!--      <CCard style="width: 15rem" class="p-0">-->
    <!--        <CCardImage orientation="top" :src="Geo" class="h-100" />-->
    <!--        <CCardBody class="p-2">-->
    <!--          <CCardTitle>Geography</CCardTitle>-->
    <!--          <CCardText class="mb-1">25 h 45min</CCardText>-->
    <!--          <CCardText class="mb-1">By Eng Kathryn</CCardText>-->
    <!--          <CProgress style="height: 10px; margin-bottom: 5px">-->
    <!--            <CProgressBar :value="50" />-->
    <!--          </CProgress>-->
    <!--        </CCardBody>-->
    <!--      </CCard>-->
    <!--      <CCard style="width: 15rem" class="p-0">-->
    <!--        <CCardImage orientation="top" :src="Chem" class="h-100" />-->
    <!--        <CCardBody class="p-2">-->
    <!--          <CCardTitle>Chemistry</CCardTitle>-->
    <!--          <CCardText class="mb-1">22 h 00min</CCardText>-->
    <!--          <CCardText class="mb-1">By Doctor Priscillia</CCardText>-->
    <!--          <CProgress style="height: 10px; margin-bottom: 5px">-->
    <!--            <CProgressBar :value="75" />-->
    <!--          </CProgress>-->
    <!--        </CCardBody>-->
    <!--      </CCard>-->
    <!--      <CCard style="width: 15rem" class="p-0">-->
    <!--        <CCardImage orientation="top" :src="Phys" class="h-100" />-->
    <!--        <CCardBody class="p-2">-->
    <!--          <CCardTitle>Physics</CCardTitle>-->
    <!--          <CCardText class="mb-1">30 h 00min</CCardText>-->
    <!--          <CCardText class="mb-1">By Eng Claire</CCardText>-->
    <!--          <CProgress style="height: 10px; margin-bottom: 5px">-->
    <!--            <CProgressBar :value="95" />-->
    <!--          </CProgress>-->
    <!--        </CCardBody>-->
    <!--      </CCard>-->
    <!--      <CCard style="width: 15rem" class="p-0">-->
    <!--        <CCardImage orientation="top" :src="Calcul" class="h-100" />-->
    <!--        <CCardBody class="p-2">-->
    <!--          <CCardTitle>Mathematics</CCardTitle>-->
    <!--          <CCardText class="mb-1">28 h 40min</CCardText>-->
    <!--          <CCardText class="mb-1">By Eng Wale</CCardText>-->
    <!--          <CProgress style="height: 10px; margin-bottom: 5px">-->
    <!--            <CProgressBar :value="68" />-->
    <!--          </CProgress>-->
    <!--        </CCardBody>-->
    <!--      </CCard>-->
    <!--      <CCard style="width: 15rem" class="p-0">-->
    <!--        <CCardImage orientation="top" :src="Bio" class="h-100" />-->
    <!--        <CCardBody class="p-2">-->
    <!--          <CCardTitle>Biology</CCardTitle>-->
    <!--          <CCardText class="mb-1">32 h 15min</CCardText>-->
    <!--          <CCardText class="mb-1">By Doctor Rome</CCardText>-->
    <!--          <CProgress style="height: 10px; margin-bottom: 5px">-->
    <!--            <CProgressBar :value="12" />-->
    <!--          </CProgress>-->
    <!--        </CCardBody>-->
    <!--      </CCard>-->
    <!--    </CRow>-->
    <CRow
      :xs="{ cols: 1, gutter: 2 }"
      :sm="{ cols: 2 }"
      :md="{ cols: 3 }"
      :lg="{ cols: 4 }"
      :xl="{ cols: 5 }"
    >
      <CCol xs>
        <CCard class="h-100">
          <CCardImage orientation="top" :src="Computer" class="h-100" />
          <CCardBody class="p-2">
            <CCardTitle>Computer Science</CCardTitle>
            <CCardText class="mb-1">21 h 30min</CCardText>
            <CCardText class="mb-1">By Doctor Jacob</CCardText>
            <CProgress style="height: 10px; margin-bottom: 5px">
              <CProgressBar :value="25" />
            </CProgress>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard class="h-100">
          <CCardImage orientation="top" :src="Geo" class="h-100" />
          <CCardBody class="p-2">
            <CCardTitle>Geography</CCardTitle>
            <CCardText class="mb-1">25 h 45min</CCardText>
            <CCardText class="mb-1">By Eng Kathryn</CCardText>
            <CProgress style="height: 10px; margin-bottom: 5px">
              <CProgressBar :value="50" />
            </CProgress>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard class="h-100">
          <CCardImage orientation="top" :src="Chem" class="h-100" />
          <CCardBody class="p-2">
            <CCardTitle>Chemistry</CCardTitle>
            <CCardText class="mb-1">22 h 00min</CCardText>
            <CCardText class="mb-1">By Doctor Priscillia</CCardText>
            <CProgress style="height: 10px; margin-bottom: 5px">
              <CProgressBar :value="75" />
            </CProgress>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard class="h-100">
          <CCardImage orientation="top" :src="Phys" class="h-100" />
          <CCardBody class="p-2">
            <CCardTitle>Physics</CCardTitle>
            <CCardText class="mb-1">30 h 00min</CCardText>
            <CCardText class="mb-1">By Eng Claire</CCardText>
            <CProgress style="height: 10px; margin-bottom: 5px">
              <CProgressBar :value="95" />
            </CProgress>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard class="h-100">
          <CCardImage orientation="top" :src="Calcul" class="h-100" />
          <CCardBody class="p-2">
            <CCardTitle>Mathematics</CCardTitle>
            <CCardText class="mb-1">28 h 40min</CCardText>
            <CCardText class="mb-1">By Eng Wale</CCardText>
            <CProgress style="height: 10px; margin-bottom: 5px">
              <CProgressBar :value="68" />
            </CProgress>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard class="h-100">
          <CCardImage orientation="top" :src="Bio" class="h-100" />
          <CCardBody class="p-2">
            <CCardTitle>Biology</CCardTitle>
            <CCardText class="mb-1">32 h 15min</CCardText>
            <CCardText class="mb-1">By Doctor Rome</CCardText>
            <CProgress style="height: 10px; margin-bottom: 5px">
              <CProgressBar :value="12" />
            </CProgress>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import Geo from '@/assets/images/geography.jpg'
import Phys from '@/assets/images/physics.jpg'
import Bio from '@/assets/images/biology.jpg'
import Chem from '@/assets/images/chemistry.jpg'
import Computer from '@/assets/images/computer_science.jpg'
import Calcul from '@/assets/images/math.jpg'
export default {
  name: 'Progress',
  setup() {
    return {
      Calcul,
      Geo,
      Phys,
      Bio,
      Chem,
      Computer,
    }
  },
}
</script>
