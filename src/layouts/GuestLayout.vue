<template>
  <AppBar />
  <router-view />
  <AppFoot />
</template>
<script>
import AppFoot from '@/components/guest/AppFoot.vue'
import AppBar from '@/components/guest/AppBar.vue'

export default {
  name: 'GuestLayout',
  components: {
    AppBar,
    AppFoot,
  },
}
</script>
