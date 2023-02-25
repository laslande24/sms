<template>
  <CNav
    variant="tabs"
    role="tablist"
    class="d-flex gap-3"
    style="justify-content: center"
  >
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPanePillsActiveKey === 1"
        @click="
          () => {
            tabPanePillsActiveKey = 1
          }
        "
      >
        ACTIVE
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPanePillsActiveKey === 2"
        @click="
          () => {
            tabPanePillsActiveKey = 2
          }
        "
      >
        PAST
      </CNavLink>
    </CNavItem>
  </CNav>
  <CTabContent class="mt-4">
    <CTabPane
      role="tabpanel"
      aria-labelledby="active-tab"
      :visible="tabPanePillsActiveKey === 1"
    >
      <div class="row" v-if="data.maxLength > 0">
        <div
          v-for="(item, key) in data"
          :key="key"
          class="col-xs-6 col-sm-6 col-md-4 col-lg-3 p-2"
        >
          <div class="bg-white shadow-sm p-2">
            <p>{{ item.name }}</p>
            <p>{{ item.course }}</p>
            <p>c{{ item.time }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <h3 class="align">No exam available</h3>
      </div>
    </CTabPane>
    <CTabPane
      role="tabpanel"
      aria-labelledby="profile-tab"
      :visible="tabPanePillsActiveKey === 2"
    >
      <div class="row" v-if="data.length > 0">
        <div
          v-for="(item, key) in data"
          :key="key"
          class="col-xs-6 col-sm-6 col-md-4 col-lg-3 p-2"
        >
          <div class="bg-white shadow-sm">
            <p class="my-1">{{ item.name }}</p>
            <p class="my-1">{{ item.course }}</p>
            <p class="my-1">
              <CIcon
                style="color: #3b5998"
                class="mx-2"
                icon="cil-calendar"
                size="lg"
              />{{ startFormat(item.date, item.time) }}
            </p>
            <p class="my-1">
              <CIcon
                style="color: #3b5998"
                class="mx-2"
                icon="cil-history"
                size="lg"
              />{{ item.time }}
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <h3>No exam available</h3>
      </div>
    </CTabPane>
  </CTabContent>
</template>

<script>
import { getExam } from '@/composables/Exam'
import { computed, ref } from 'vue'
import { dateFormat } from '@/utils/dateFormat.js'
import exam from '@/views/Student/Exam/index.vue'

export default {
  name: 'index',
  methods: {
    exam() {
      return exam
    },
  },
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
      let date = new Date()
      if (exams.value != null) {
        if (tabPanePillsActiveKey.value == 1) {
          return exams.value.filter(
            (value) => new Date(value.date).getTime() >= date.getTime(),
          )
        } else {
          return exams.value.filter(
            (value) => new Date(value.date).getTime() <= date.getTime(),
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
      return dateFormat(d, 'd mmm')
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

<style scoped></style>
