<template>
  <div class="bg-white" style="min-height: 78vh" v-if="chapters != null">
    <div class="p-3" style="width: 95%">
      <Collapse :open="true" v-for="(chapter, key) in chapters" :key="key">
        <template v-slot:head>
          <h6>
            Chapter {{ key + 1 }} :
            <span style="color: crimson">{{ chapter.title }}</span>
          </h6>
        </template>
        <template v-slot:body>
          <p>{{ chapter.objective }}. Its has the following topics:</p>
          <a
            v-if="chapter.doc != '' && chapter.doc != null"
            :href="chapter.doc"
            download
          >
            <CIcon
              class="mx-2 icon-dir"
              ref="icon"
              icon="cil-arrowThickToBottom"
              size="lg"
            />
            {{ chapter.doc }}
          </a>
          <Collapse
            :open="false"
            v-for="(topic, key2) in chapter.topics"
            :key="key2"
          >
            <template v-slot:head>
              <h6>{{ key2 + 1 }}) : {{ topic.title }}</h6>
            </template>
            <template v-slot:body>
              <p>{{ topic.objective }}</p>
              <a
                v-if="topic.doc != '' && topic.doc != null"
                :href="topic.doc"
                download
              >
                <CIcon
                  class="mx-2 icon-dir"
                  ref="icon"
                  icon="cil-arrowThickToBottom"
                  size="lg"
                />
                {{ topic.doc }}
              </a>
            </template>
          </Collapse>
        </template>
      </Collapse>
    </div>
  </div>
  <div v-else>
    <div v-if="error == null">
      <CSpinner color="primary" style="width: 4rem; height: 4rem" />
    </div>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script>
import { getCourseChapter } from '@/composables/Course'
import Collapse from '@/components/Collapse.vue'
export default {
  name: 'Chapters',
  props: ['id'],
  components: { Collapse },
  setup(props) {
    const { error, chapters, load } = getCourseChapter(props.id)

    load()
    return {
      error,
      chapters,
    }
  },
}
</script>

<style scoped></style>
