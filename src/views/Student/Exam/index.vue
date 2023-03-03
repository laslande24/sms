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
      <div class="row" v-if="data.length > 0">
        <div
          v-for="(item, key) in data"
          :key="key"
          class="col-xs-6 col-sm-6 col-md-4 col-lg-3 p-2"
        >
          <div class="bg-white shadow-sm p-2 exam-card">
            <div class="img-div">
              <img :src="'http://localhost:8000/static/images/' + item.image" />
              <div>
                <p class="my-1">{{ item.course }}</p>
              </div>
            </div>
            <p class="my-2" style="font-size: 1rem; font-weight: 600">
              {{ item.name }}
            </p>
            <p class="my-1">
              <CIcon
                style="color: #3b5998"
                class="me-2"
                icon="cil-calendar"
                size="lg"
              />{{ startFormat(item.date, item.time) }}
            </p>
            <div class="row">
              <p class="my-1 col-sm-5">
                <CIcon
                  style="color: #3b5998"
                  class="me-2"
                  icon="cil-history"
                  size="lg"
                />2H{{ item.duration }}
              </p>
              <p class="my-1 col-sm-6">
                <CIcon
                  style="color: #3b5998"
                  class="mx-2"
                  icon="cil-listNumbered"
                  size="lg"
                />{{ item.question.length }}
              </p>
              <router-link
                :to="{ name: 'Take Exam', params: { id: item.exam_id } }"
              >
                take axam
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h3>No exam available</h3>
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
          <div class="bg-white shadow-sm p-2 exam-card">
            <div class="img-div">
              <img :src="'http://localhost:8000/static/images/' + item.image" />
              <div>
                <p class="my-1">{{ item.course }}</p>
              </div>
            </div>
            <p class="my-2" style="font-size: 1rem; font-weight: 600">
              {{ item.name }}
            </p>
            <p class="my-1">
              <CIcon
                style="color: #3b5998"
                class="me-2"
                icon="cil-calendar"
                size="lg"
              />{{ startFormat(item.date, item.time) }}
            </p>
            <div class="row">
              <p class="my-1 col-sm-5">
                <CIcon
                  style="color: #3b5998"
                  class="me-2"
                  icon="cil-history"
                  size="lg"
                />2H{{ item.duration }}
              </p>
              <p class="my-1 col-sm-6">
                <CIcon
                  style="color: #3b5998"
                  class="mx-2"
                  icon="cil-listNumbered"
                  size="lg"
                />{{ item.question.length }}
              </p>
              <router-link
                :to="{ name: 'Take Exam', params: { id: item.exam_id } }"
              >
                result
              </router-link>
            </div>
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
