import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { ru } from 'vuetify/locale'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { ClickOutside } from 'vuetify/directives'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  directives: {
    ClickOutside,
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    locale: 'ru',
    fallback: 'ru',
    messages: { ru },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
