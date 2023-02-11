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
        <div class="d-flex gap-1">
          <CCard
            style="width: 9rem; border: none"
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <CCardBody class="p-0" style="max-height: 3rem"
              >Received date <br />11-02-2023</CCardBody
            >
          </CCard>
          <CAccordionItem :item-key="1" class="flex-grow-1">
            <CAccordionHeader> Mathematics #1</CAccordionHeader>
            <CAccordionBody> </CAccordionBody>
          </CAccordionItem>
        </div>
        <div class="d-flex gap-1">
          <CCard
            style="width: 9rem; border: none"
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <CCardBody class="p-0" style="max-height: 3rem"
              >Received date <br />12-02-2023</CCardBody
            >
          </CCard>
          <CAccordionItem :item-key="2" class="flex-grow-1">
            <CAccordionHeader> Mathematics #2</CAccordionHeader>
            <CAccordionBody> </CAccordionBody>
          </CAccordionItem>
        </div>
        <div class="d-flex gap-1">
          <CCard
            style="width: 9rem; border: none"
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <CCardBody class="p-0" style="max-height: 3rem"
              >Received date <br />12-02-2023</CCardBody
            >
          </CCard>
          <CAccordionItem :item-key="3" class="flex-grow-1">
            <CAccordionHeader> Physics #1</CAccordionHeader>
            <CAccordionBody> </CAccordionBody>
          </CAccordionItem>
        </div>
        <div class="d-flex gap-1">
          <CCard
            style="width: 9rem; border: none"
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <CCardBody class="p-0" style="max-height: 3rem"
              >Received date <br />13-02-2023</CCardBody
            >
          </CCard>
          <CAccordionItem :item-key="4" class="flex-grow-1">
            <CAccordionHeader> Geography #1</CAccordionHeader>
            <CAccordionBody> </CAccordionBody>
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
        <CAccordionItem :item-key="1">
          <CAccordionHeader> Biology #1</CAccordionHeader>
          <CAccordionBody> </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem :item-key="2">
          <CAccordionHeader> Economics </CAccordionHeader>
          <CAccordionBody> </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </CTabPane>
  </CTabContent>
</template>
<script>
import { CCardBody } from '@coreui/vue'

export default {
  data() {
    return {
      tabPanePillsActiveKey: 1,
    }
  },
  components: { CCardBody },
}
</script>
