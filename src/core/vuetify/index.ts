/* eslint-disable @typescript-eslint/no-explicit-any */
import 'vuetify/styles'
import '@/assets/styles/main.scss'
import { createVuetify } from 'vuetify'
import { ru } from 'vuetify/locale'
import { ClickOutside } from 'vuetify/directives'
import type { App } from 'vue'
import components from './components'
import GrainLightTheme from './themes/grain-light'

const vuetify = createVuetify({
  components,
  directives: {
    ClickOutside,
  },
  theme: {
    defaultTheme: 'grain-light',
    themes: {
      'grain-light': GrainLightTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
  locale: {
    locale: 'ru',
    fallback: 'ru',
    messages: { ru },
  },
})

const init = (app: App<any>) => {
  app.use(vuetify)
}

export default { init }
