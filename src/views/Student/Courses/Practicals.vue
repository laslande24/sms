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
        name: 'Voltage and DC',
        path: 'http://localhost:8000/static/simulations/physic/circuit-construction-kit-ac-virtual-lab_en.html',
        type: 'Physics',
      },
      {
        name: 'Ohms law',
        path: 'http://localhost:8000/static/simulations/physic/ohms-law_en.html',
        type: 'Physics',
      },
      {
        name: 'charges-and-fields_en',
        path: 'http://localhost:8000/static/simulations/physic/charges-and-fields_en.html',
        type: 'Physics',
      },
      {
        name: 'Faraday',
        path: 'http://localhost:8000/static/simulations/physic/faradays-law_fr.html',
        type: 'Physics',
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
