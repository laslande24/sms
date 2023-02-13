<template>
  <div class="my-2">
    <div @click="toggle" class="collapse-head">
      <slot name="head"></slot>
      <CIcon
        :style="!collap ? 'rotate: 0deg' : 'rotate: 90deg'"
        class="mx-2 icon-dir"
        ref="icon"
        icon="cil-chevronRight"
        size="lg"
      />
    </div>
    <CCollapse :visible="collap">
      <div class="collapse-body pl-3 pt-2">
        <slot name="body"></slot>
      </div>
    </CCollapse>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Collapse',
  props: ['open'],
  setup(props) {
    const collap = ref(props.open)
    const icon = ref(null)
    const toggle = () => {
      collap.value = !collap.value
    }
    return {
      collap,
      icon,
      toggle,
    }
  },
}
</script>

<style scoped>
.collapse-head {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
}

.icon-dir {
  rotate: 0deg;
  transition: rotate 0.5s;
}
.collapse-body {
  padding-left: 20px;
}
</style>
