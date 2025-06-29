<script lang="ts" setup>
import { ref } from 'vue'
import { useDebounceFn } from '@vueuse/core';
import { useTemplatesStore } from '@/stores/templates'

const templateStore = useTemplatesStore()


  const searchStr = ref('')

  const onSearch = useDebounceFn(() => {
    templateStore.fetchTemplates({name: searchStr.value})
  }, 300)
</script>

<template>
  <div class="search">
    <input v-model="searchStr" class="search__input" type="text" placeholder="Поиск" @input="onSearch"/>
  </div>

</template>

<style lang="scss">
  .search {
    position: relative;
    max-width: 520px;
    width: 100%;

    &__input {
      display: block;
      border: 1px solid #cfcfcf;
      padding: 8px;
      border-radius: 4px;
      width: 100%;
    }
  }
</style>
