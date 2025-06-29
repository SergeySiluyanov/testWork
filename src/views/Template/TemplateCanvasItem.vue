<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useTemplatesStore } from '@/stores/templates'
import type { TCanvasTemplatesItem } from '@/api/models/canvas-templates'

const templatesStore = useTemplatesStore()
const route = useRoute()
const item: any = ref<TCanvasTemplatesItem>({})

const fetchInfo = async () => {
  const selectId: any = route?.params?.id
  const { data }: any = await templatesStore.fetchTemplateOne(selectId)

  item.value = {...data}
}

onMounted(async () => {

  fetchInfo()
});
</script>

<template>
  <div class="template-canvas">
    <div class="template-canvas__name">{{item.name}}</div>
    <div v-if="item.tags?.length > 0" class="template-canvas__tags tags">
      <div v-for="tag, index in item.tags" :key="index" class="tags__item">{{ tag }}</div>
    </div>
    <img class="template-canvas__images" :style="`max-height: ${item.height}px; max-width: ${item.width}px;`" :src="item.preview_image" />
  </div>
</template>

<style lang="scss" scoped>
.template-canvas {
  display: block;

  &__name {
    margin-bottom: 20px;
    font-size: 18px;
  }

  &__tags {
    margin-bottom: 20px;
  }
}

.tags {
  display: flex;
  align-items: center;

  &__item {
    background: #cfcfcf;
    margin-right: 4px;
    padding: 8px;
    border-radius: 8px;
  }
}
</style>
