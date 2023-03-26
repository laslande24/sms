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
      <CAccordion :active-item-key="0" class="d-flex flex-column gap-4">
        <div
          v-for="(assignment, index) in data"
          :key="index"
          class="d-flex gap-1"
        >
          <CCard
            style="width: 9rem; border: none"
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <CCardBody class="p-0" style="max-height: 3rem"
              >Submit date <br />{{ assignment.submit }}</CCardBody
            >
          </CCard>
          <CAccordionItem :item-key="index" class="flex-grow-1">
            <CAccordionHeader> {{ assignment.name }}</CAccordionHeader>
            <CAccordionBody>
              <p>{{ assignment.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <a :href="assignment.doc" download="">{{ assignment.doc }}</a>
                <CButton class="btn-sm" @click="modal(index)" color="primary">
                  Submit Answer
                </CButton>
              </div>
            </CAccordionBody>
          </CAccordionItem>
        </div>
      </CAccordion>
    </CTabPane>
    <CTabPane
      role="tabpanel"
      aria-labelledby="profile-tab"
      :visible="tabPanePillsActiveKey === 2"
    >
      <CAccordion :active-item-key="0" class="d-flex flex-column gap-4">
        <CAccordionItem
          v-for="(assignment, index) in data"
          :key="index"
          :item-key="index"
        >
          <CAccordionHeader>{{ assignment.name }} </CAccordionHeader>
          <CAccordionBody>
            {{ assignment.description }}
            <a :href="assignment.doc">{{ assignment.doc }}</a>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </CTabPane>
  </CTabContent>

  <CModal
    alignment="center"
    :visible="visibleVerticallyCenteredDemo"
    @close="
      () => {
        visibleVerticallyCenteredDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Submit assignment</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm>
        <CFormInput
          type="file"
          id="exampleFormControlInput1"
          :label="ass.name"
          placeholder="choice file"
        />
      </CForm>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleVerticallyCenteredDemo = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>
<script>
import { CCardBody } from '@coreui/vue'
import { computed, ref } from 'vue'
import { getAssignment } from '@/composables/Course'

export default {
  data() {
    return {}
  },
  components: { CCardBody },
  setup() {
    const { error, assignments, load } = getAssignment()
    const tabPanePillsActiveKey = ref(1)
    const visibleVerticallyCenteredDemo = ref(false)
    const ass = ref(null)
    load()
    const data = computed(() => {
      let date = new Date()
      if (assignments.value != null) {
        if (tabPanePillsActiveKey.value == 1) {
          return assignments.value.filter(
            (value) => new Date(value.submit).getTime() >= date.getTime(),
          )
        } else {
          return assignments.value.filter(
            (value) => new Date(value.submit).getTime() <= date.getTime(),
          )
        }
      } else {
        return null
      }
    })
    const modal = (index) => {
      ass.value = data.value[index]
      visibleVerticallyCenteredDemo.value = true
    }

    return {
      error,
      assignments,
      data,
      ass,
      tabPanePillsActiveKey,
      visibleVerticallyCenteredDemo,
      modal,
    }
  },
}
</script>
