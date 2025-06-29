export type Response<T> = {
  status: 'success' | 'error'
  data?: T
  errors?: string[]
}

export type TResponse<T> = {
  status: 'success' | 'error'
  data?: T
  errors?: string[]
}
