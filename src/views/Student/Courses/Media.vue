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
        Document
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
        Image
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
        <div class="bg-white">
          <div class="d-flex my-2">
            <div class="div-pre"></div>
            <div class="d-flex justify-content-between w-75 pt-2">
              <div>
                <p class="m-0">assignment</p>
                <p style="font-size: 0.7rem; padding: 0" class="p-0 m-0">pdf</p>
              </div>
              <div>
                <a href="" download="">
                  <CIcon
                    class="mx-2 icon-dir"
                    ref="icon"
                    icon="cil-arrowThickToBottom"
                    size="lg"
                  />
                  download
                </a>
              </div>
            </div>
          </div>
        </div>
      </CAccordion>
    </CTabPane>
    <CTabPane
      role="tabpanel"
      aria-labelledby="profile-tab"
      :visible="tabPanePillsActiveKey === 2"
    >
      <CAccordion :active-item-key="0" class="d-flex flex-column gap-4">
        <div class="bg-white p-2">
          <div class="d-flex flex-wrap">
            <div class="media-img">
              <CCardImage orientation="top" :src="Computer" class="h-100" />
            </div>
          </div>
        </div>
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
import { computed, ref } from 'vue'
import Computer from '@/assets/images/computer_science.jpg'
import { getAssignment } from '@/composables/Course'

export default {
  name: 'Media',
  data() {
    return {}
  },
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
      Computer,
    }
  },
}
</script>
<style>
.div-pre {
  height: 50px;
  width: 50px;
}
.media-img {
  height: 100px;
  width: 100px;
}
.media-img img {
  height: 100px;
  width: 100px;
}
</style>
