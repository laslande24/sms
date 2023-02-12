<template>
  <textarea ref="textarea" rows="1" @focus="resize" @keyup="resize"> </textarea>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'CustomTextarea',
  setup() {
    const textarea = ref(null)

    const resize = () => {
      textarea.value.style.height = textarea.value.scrollHeight - 4 + 'px'
    }
    return {
      textarea,
      resize,
    }
  },
}
</script>

<style scoped></style>
