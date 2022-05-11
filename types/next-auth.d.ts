import NextAuth, { DefaultSession } from 'next-auth'
import { JWT, DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string
      accessTokenExpires: number
      refreshToken: string
      username: string
      role: string
      id: number
    } & DefaultSession['user']

    token: {
      accessToken: string
      accessTokenExpires: number
      refreshToken: string
      username: string
      role: string
      id: number
    } & DefaultJWT['token']
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    accessToken: string
    accessTokenExpires: number
    refreshToken: string
    username: string
    role: string
    id: number
  }
}
