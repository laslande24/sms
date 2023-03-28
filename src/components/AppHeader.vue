<template>
  <CHeader position="sticky" class="mb-2">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>

      <CHeaderBrand class="mx-auto d-md-none" to="/">
        <CIcon :icon="logo" height="48" alt="Logo" />
        <p style="position: relative; top: -12px" class="d-inline-block">
          Yambaya-mo
        </p>
      </CHeaderBrand>

      <!--      <CHeaderBrand class="mx-auto d-lg-none" to="/">-->
      <!--        <CIcon :icon="logo" height="48" alt="Logo" />-->
      <!--      </CHeaderBrand>-->
      <CHeaderNav class="d-none d-md-flex me-auto">
        <CNavItem>
          <CNavLink href="/dashboard"> Dashboard </CNavLink>
        </CNavItem>
      </CHeaderNav>
      <CHeaderNav>
        <NotificationHeader />
        <CIcon class="mx-2 my-2" icon="cil-video" size="lg" />
        <MessageHeader />
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
    </CContainer>
    <CHeaderDivider />
    <CContainer fluid>
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>

<script>
import AppBreadcrumb from './AppBreadcrumb'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
import MessageHeader from '@/views/MessageHeader.vue'
import NotificationHeader from '@/views/NotificationHeader.vue'
import { logo } from '@/assets/brand/logo'
export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumb,
    AppHeaderDropdownAccnt,
    NotificationHeader,
    MessageHeader,
  },
  setup() {
    return {
      logo,
    }
  },
}
</script>
