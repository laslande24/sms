<template>
  <WidgetsStatsA />
  <CContainer>
    <CRow>
      <CCol md="8">
        <div class="d-flex justify-content-between">
          <h3>Latest Exam</h3>
          <router-link :to="{ name: 'Teacher My Exams' }">
            Register Exam
          </router-link>
        </div>
        <CTable :columns="columns" :items="items" />
      </CCol>
      <CCol md="8 mt-3">
        <div class="d-flex justify-content-between">
          <h3>Latest Questions</h3>

          <router-link :to="{ name: 'Teacher view Questions' }">
            Register new question
          </router-link>
        </div>
        <CTable :columns="columns" :items="items" />
      </CCol>
      <!-- <CCol md="6">
        <CTable :columns="columns" :items="items" />
      </CCol> -->
    </CRow>
  </CContainer>
</template>

<script>
import WidgetsStatsA from '../../widgets/WidgetsStatsTypeA.vue'
export default {
  components: {
    WidgetsStatsA,
  },
  data: () => {
    return {
      columns: [
        {
          key: 'id',
          label: '#',
          _props: { scope: 'col' },
        },
        {
          key: 'latest question',
          _props: { scope: 'col' },
        },
        {
          key: 'answers',
          label: 'Answers',
          _props: { scope: 'col' },
        },
        {
          key: 'level',
          label: 'Level',
          _props: { scope: 'col' },
        },
        {
          key: 'Type',
          label: 'type',
          _props: { scope: 'col' },
        },
      ],
    }
  },
}
</script>

<style></style>
