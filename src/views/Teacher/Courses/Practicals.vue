<template>
  <div class="row">
    <div
      v-for="(value, index) in data"
      :key="index"
      class="col-sm-6 col-md-4 col-lg-3"
    >
      <div class="prat bg-white shadow-sm p-2">
        <div class="prat-head">
          <iframe
            :src="value.path"
            name="targetframe"
            allowTransparency="true"
          ></iframe>
        </div>
        <div class="prat-body">
          <a target="_blank" :href="value.path">{{ value.name }}</a>
          <p>{{ value.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Practicals',
  setup() {
    const data = ref([
      {
        name: 'Graph Therem',
        path: 'http://localhost:8000/static/simulations/boilogy/color-vision_en.html',
        type: 'Math',
      },
      {
        name: 'Vector Addition',
        path: 'http://localhost:8000/static/simulations/math/math concept/vector-addition_en.html',
        type: 'Math',
      },
      {
        name: 'Arithmetics',
        path: 'http://localhost:8000/static/simulations/math/math concept/arithmetic_en.html',
        type: 'Math',
      },
    ])

    return {
      data,
    }
  },
}
</script>

<style scoped>
.prat-head {
  height: 150px;
  width: 100%;
  overflow: clip;
}
.prat {
  border-radius: 5px;
}
</style>
