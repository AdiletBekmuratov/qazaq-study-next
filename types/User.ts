export interface Role {
  id: number
  name: string
  createdDateTime: string
  updatedDateTime: string
}

export interface LoginData {
  id: number
  accessToken: string
  refreshToken: string
  username: string
  roles: Role[]
  type: string
}

export interface User {
  avatar?: string
  last_name?: string
  first_name?: string
  email: string
  id: number
}

export interface Questions {
  id: number
  question: string
  answers: { id: number; answer: string }[]
}
