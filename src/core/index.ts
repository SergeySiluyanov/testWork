/* eslint-disable @typescript-eslint/no-explicit-any */
import type { App } from 'vue'
import * as Axios from './axios'
import Vuetify from './vuetify'

export default async (app: App<any>) => {
  await Axios.init(app)
  await Vuetify.init(app)

  return app
}
