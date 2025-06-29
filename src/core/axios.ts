/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import Cookie from 'js-cookie'

const TOKEN_KEY = 'csrf'

const instance = axios.create({
  baseURL: 'https://dev-api.aiscreen.io/',
  headers: {
    common: {
      Authorization: `Bearer ${Cookie.get(TOKEN_KEY)}`,
    },
  },
})

const init = (app?: unknown) => {
  return instance
}

export default instance
export { init }
