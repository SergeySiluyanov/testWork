<script setup lang="ts">
import { RouterView } from 'vue-router'
import axios from 'axios'

axios.defaults.baseUrl = 'https://dev-api.aiscreen.io/'
</script>

<template>
  <RouterView />
</template>

