<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { useTemplatesStore } from '@/stores/templates'

type TTemplateItem = {
  created_at?: string,
  created_by?: string,
  height?: string,
  id: number,
  name?: string,
  preview_image?: any,
  tags?: string[],
  type?: string,
  updated_by?: string,
  width?: string,
}

const emit = defineEmits(['edit-template'])

const {name, preview_image, tags = [], id, height, width} = defineProps<TTemplateItem>()

const templatesStore = useTemplatesStore()

const deleteTemplate = async () => {
  await templatesStore.deleteTemplate(id)
}

const filterTags = (item: string) => {
  templatesStore.fetchTemplates(item)
}

const editForm = () => {
  const item = {
    name,
    preview_image,
    tags,
    id,
    height,
    width,
  }

  emit('edit-template', item);
}
</script>

<template>
  <div class="template-item">
    <div class="template-item__header header">
      <router-link :to="`/template/${id}`" class="template-item__name">{{ name }}</router-link>
      <div class="header__action action">

        <v-icon class="action__icon" size="x-small" icon="mdi-pencil" @click="editForm"></v-icon>
        <v-icon class="action__icon" size="x-small" icon="mdi-delete" @click="deleteTemplate"></v-icon>
      </div>
    </div>

    <div v-if="tags?.length > 0" class="template-item__tags tags">
      <div v-for="item in tags" :key="item" class="tags__item" @click="filterTags(item)">{{ item }}</div>
    </div>

    <img class="template-item__images" :src="preview_image" :alt="name" />
  </div>
</template>

<style lang="scss" scoped>
  .template-item {
    border: 1px solid #cfcfcf;
    padding: 20px;
    max-width: 320px;
    width: 100%;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__name {
      display: block;
      margin-bottom: 12px;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }

    &__images {
      width: 100%;
    }
  }
  .tags {
    &__item {
      margin-right: 8px;
      font-weight: 400;
      font-size: 10px;
      background-color: #dddddd;
      padding: 4px 8px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #cfcfcf;
      }
    }
  }

  .action__icon {
    margin-left: 4px;
    color: #dddddd;
    cursor: pointer;

    &:hover {
      color: #333333;
    }
  }
</style>
