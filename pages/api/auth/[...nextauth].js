import { getCurrentUser } from '@/helpers/requests'
import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

async function refreshAccessToken(token) {
  try {
    const payload = {
      refresh_token: token.refreshToken,
    }

    console.log('Payload', { payload })

    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`
    const response = await axios.post(url, payload)

    const refreshedTokens = await response.data

    console.log('Refresh', { refreshedTokens })

    if (refreshedTokens?.errors) {
      console.log(refreshedTokens?.errors[0])
    }

    const userData = await getCurrentUser(refreshedTokens.data.access_token)
    const addition = {
      email: userData.email,
      role: userData.role,
      id: userData.id,
    }

    let newToken = {
      accessTokenExpires: Date.now() + refreshedTokens.data.expires,
      accessToken: refreshedTokens.data.access_token,
      refreshToken: refreshedTokens.data.refresh_token,
    }

    console.log('NEW_TOKEN', { newToken })

    return {
      ...newToken,
      ...addition,
    }
  } catch (error) {
    console.log('error', error)

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}

const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        try {
          const payload = {
            email: credentials.email,
            password: credentials.password,
          }

          console.log('Payload', { payload })

          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            payload
          )

          const tokenData = await res.data
          if (res.statusText !== 'OK') {
            if (
              tokenData?.errors[0]?.extensions?.code === 'INVALID_CREDENTIALS'
            ) {
              throw new Error('Неверный Email или пароль')
            }
            throw new Error(tokenData?.errors[0]?.message)
          }
          if (tokenData?.data?.access_token) {
            const userData = await getCurrentUser(tokenData?.data?.access_token)
            console.log('NEXT_USER', { userData })
            const addition = {
              email: userData.email,
              role: userData.role,
              id: userData.id,
            }

            return { ...tokenData.data, ...addition }
          }

          return null
        } catch (error) {
          throw new Error(error)
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token.accessToken = user.access_token
        token.accessTokenExpires = Date.now() + user.expires
        token.refreshToken = user.refresh_token
        token.email = user.email
        token.role = user.role
        token.id = user.id
      }

      const shouldRefreshTime = Math.round(
        token.accessTokenExpires - 5 * 60 * 1000 - Date.now()
      )

      console.log({ shouldRefreshTime })

      if (shouldRefreshTime > 0) {
        return token
      }

      return await refreshAccessToken(token)
    },

    async session({ session, token }) {
      session.user.email = token.email
      session.user.role = token.role === process.env.D_ADMIN ? 'ADMIN' : 'USER'
      session.user.accessToken = token.accessToken
      session.expires = token.accessTokenExpires
      session.user.id = token.id
      session.error = token?.error
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
}

export default (req, res) => NextAuth(req, res, options)
