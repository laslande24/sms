<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-1">
        <CContainer lg style="padding: 0 5px; margin: 0">
          <router-view />
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
  <!--comment-->
</template>
<style>
a {
  text-decoration: none;
}
</style>
<script>
import { CContainer } from '@coreui/vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppFooter,
    AppHeader,
    AppSidebar,
    CContainer,
  },
}
</script>
