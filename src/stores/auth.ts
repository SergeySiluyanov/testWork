/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import Cookie from 'js-cookie'
import auth from '@/api/auth'

const TOKEN_KEY = 'csrf'

type TAuth = {
  email: string
  password: string
  remember_me: number
}

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref(false)

  const login = async (params: TAuth) => {
    try {
      const response: any = await auth.login(params)

      Cookie.set(TOKEN_KEY, response?.data?.token)

      isAuth.value = true
    } catch (err) {
      return err
    }
  }

  return {
    isAuth,
    login,
  }
})
