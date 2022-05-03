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
  accessToken: string
  accessTokenExpires: number
  refreshToken: string
  username: string
  role: string[]
  id: number
}
