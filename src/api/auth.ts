import axios from '@/core/axios'

type TAuth = {
  email: string
  password: string
}

type TResponse = {
  token: string
}

export class Auth {
  async login(params?: TAuth) {
    try {
      const data = await axios.post<Promise<TResponse>>('api/v1/login', params)

      return data
    } catch (err) {
      console.warn(err)

      return err
    }
  }
}

export default new Auth()
