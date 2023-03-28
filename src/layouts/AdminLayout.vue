<template>
  <div>
    <AppSidebar :type="'admin'" />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-1 px-lg-3">
        <div class="py-lg-4 m-0">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'

export default {
  name: 'AdminLayout',
  components: {
    //AppFooter,
    AppHeader,
    AppSidebar,
  },
}
</script>
