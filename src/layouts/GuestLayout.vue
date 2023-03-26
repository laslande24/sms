<template>
  <AppBar></AppBar>
  <router-view />
  <AppFoot></AppFoot>
</template>

<script>
import AppFoot from '@/components/guest/AppFoot.vue'
import AppBar from '@/components/guest/AppBar.vue'

export default {
  name: 'GuestLayout',
  components: {
    AppFoot,
    AppBar,
  },
}
</script>

<style scoped></style>
