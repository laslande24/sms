<template lang="pug">
.alternative(:class="{selected : selected}" @click="selectAlternative")
    | {{alternative.id}}. {{alternative.alternative}}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapMutations, mapState } from 'vuex';
// Types
import { Alternative as AlternativeType } from '@/types/quiz.d';

@Options({
  computed: mapState(['alternativeSelected']),
  props: {
    alternative: {
      type: Object,
    },
  },
  watch: {
    alternativeSelected(value: AlternativeType) {
      if (this.alternative.id === value.id) {
        this.selected = true;
      } else {
        this.selected = false;
      }
    },
  },
  methods: mapMutations(['UPDATE_ALTERNATIVE_SELECTED']),
})
export default class Alternative extends Vue {
  alternative!: AlternativeType;

  alternativeSelected!: AlternativeType;

  selected = false;

  UPDATE_ALTERNATIVE_SELECTED!: (alternative: AlternativeType) => void;

  selectAlternative(): void {
    this.UPDATE_ALTERNATIVE_SELECTED(this.alternative);
  }
}
</script>

<style lang="scss" scoped>
.alternative {
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 2px solid #efeefc;
  color: #0c092a;
  font-size: 1.6rem;
}
.selected {
  font-weight: 600;
  background-color: #efeefc;
}
</style>
