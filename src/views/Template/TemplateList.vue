<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import SearchComponent from '@/components/Search/SearchComponent.vue'
import NotFounded from '@/components/NotFounded/NotFounded.vue'
import LoginComponent from '@/components/Login/LoginComponent.vue'
import TemplateItem from '@/components/Template/TemplateItem.vue'
import TemplateForm from '@/components/Template/TemplateForm.vue'

import { useTemplatesStore } from '@/stores/templates'
import { useAuthStore } from '@/stores/auth'

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

const authStore = useAuthStore()
const isShowForm = ref(false)
const form = ref<unknown>(null)

const templateStore = useTemplatesStore()

const closeModal = () => {
  isShowForm.value = false;
}

const { templatesList } = storeToRefs(templateStore)

const editForm = (item: TTemplateItem) => {
  isShowForm.value = true

  form.value = {
    ...item,
    tags: (item.tags || []).join(', ')
  }
}

onMounted(() => {
  templateStore.fetchTemplates()
})
</script>

<template>
  <div class="template-list">
    <div class="template-list__header header">
      <div class="header__search">
        <search-component />
      </div>
      <div class="header__actions">
        <v-btn @click="isShowForm = true">Добавить запись</v-btn>
      </div>
    </div>
    <template v-if="!authStore.isAuth">
      <login-component />
    </template>

    <template v-else>
      <not-founded v-if="templatesList?.length === 0" />

      <template v-else>
        <div class="template-list__title">Template Canvas</div>
        <div class="template-list__content">
          <template-item class="template-list__item" v-for="item in templatesList" :key="item.id" v-bind="item" @edit-template="editForm" />
        </div>
      </template>
    </template>
  </div>

  <v-dialog v-model="isShowForm" max-width="720px">
    <v-card>
      <TemplateForm  @close="closeModal" :form="form" />
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
.template-list {
  &__header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  &__title {
    text-align: center;
    margin-bottom: 40px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }

  &__item {
    margin-bottom: 20px;
    margin-left: 20px;

    &:nth-child(3n + 1) {
      margin-left: 0;
    }
  }
}

.header {
  &__search {
    flex: 0 0 520px;
    margin-right: 20px;
  }
}
</style>
