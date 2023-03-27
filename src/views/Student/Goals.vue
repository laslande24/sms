<!-- eslint-disable prettier/prettier -->
<template>
  <div class="row col-sm-9 col-md-6 col-lg-4 mb-4 px-4">
    <CCard class="shadow-sm p-0">
      <CCardHeader class="p-2">
        <div class="row">
          <div class="col-5">
            <h6 class="text-center mt-2">ACADEMIC</h6>
          </div>
          <div class="col-5">
            <CProgress
              :value="20"
              color="success"
              animated
              show-value
              style="height: 20px"
              class="mt-1"
            />
            <small style="font-size: x-small"> 2/5 steps completed </small>
          </div>
          <div class="col-2">
            <div class="text-center">
              <span>5</span>
              <span style="font-size: x-small"> steps </span>
            </div>
          </div>
        </div>
      </CCardHeader>
      <CCardBody class="pb-0 pt-1" style="border-bottom-style: outset;border-bottom-width: 5px;">
        <div class="py-2 pt-3 d-flex text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          fugiat exercitationem dolore, cum quis optio?
        </div>
      </CCardBody>

      <CCardHeader style="padding: 0px 12px 0 12px">
        <CTabs variant="pills" :active-tab="1">
          <CRow>
            <CCol md="6" class="py-3 text-center" :class="[tabPanePillsActiveKey ? 'bg-warning' :  '', 'bg-secondary']">
              <CNavLink
                href="javascript:void(0);"
                :active="tabPanePillsActiveKey === true"

                @click="
                  () => {
                    tabPanePillsActiveKey = true
                  }
                "
              >
                Next step
              </CNavLink>
            </CCol>
            <CCol md="6" class=" py-3 text-center" :class="[tabPanePillsActiveKey ? 'bg-secondary' :  'bg-warning', '']">
              <CNavLink
                href="javascript:void(0);"
                :active="tabPanePillsActiveKey === false"
                @click="
                  () => {
                    tabPanePillsActiveKey = false
                  }
                "
              >
                View All Steps
              </CNavLink>
            </CCol>
          </CRow>
        </CTabs>
      </CCardHeader>
      <CCardBody class="p-2">

        <CTabPane
          role="tabpanel"
          class="p-1"
          aria-labelledby="home-tab"
          :visible="tabPanePillsActiveKey === true"
        >
          Raw denim you probably haven't heard of them jean shorts Austin.
          Nesciunt tofu stumptown
        </CTabPane>
        <CTabPane
          role="tabpanel"
          class="p-1"
          aria-labelledby="profile-tab"
          :visible="tabPanePillsActiveKey === false"
        >
          Food truck fixie locavore, accusamus mcsweeney's marfa nulla
          single-origin coffee squid.
        </CTabPane>
      </CCardBody>
      <CCardFooter class="text-center p-0">
        <CButton  color="success" class=" w-100 " variant="ghost"  shape="rounded-0">Mark Step Done</CButton>
      </CCardFooter>
    </CCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPanePillsActiveKey: true,
    }
  },
}
</script>

<style></style>
