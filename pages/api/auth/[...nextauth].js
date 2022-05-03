import axios from 'axios'
import jwt_decode from 'jwt-decode'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

async function refreshAccessToken(token) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/authentication/refreshToken`
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token.refreshToken}`,
        },
      }
    )

    const refreshedTokens = response.data

    console.log('Refresh', { refreshedTokens })

    const decodedAccess = jwt_decode(refreshedTokens.accessToken)
    console.log({ decodedAccess })

    let newToken = {
      ...refreshedTokens,
      accessTokenExpires: decodedAccess.exp * 1000,
      roles: decodedJwt.roles,
      refreshToken: token.refreshToken,
    }

    console.log('NEW_TOKEN', { newToken })

    return {
      ...newToken,
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
      credentials: null,
      async authorize(credentials, _req) {
        try {
          const payload = {
            username: credentials?.username,
            password: credentials?.password,
          }

          console.log('Login Payload', { payload })

          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/authentication/login`,
            payload
          )

          const tokenData = response.data

          if (tokenData?.accessToken) {
            const decodedJwt = jwt_decode(tokenData?.accessToken)
            const returnData = {
              ...tokenData,
              accessTokenExpires: decodedJwt.exp * 1000,
              roles: decodedJwt.roles,
            }
            console.log({ returnData })
            return returnData
          }

          return null
        } catch (error) {
          console.log(error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        console.log({ user })

        token.accessToken = user.accessToken
        token.accessTokenExpires = user.accessTokenExpires
        token.refreshToken = user.refreshToken
        token.username = user.username
        token.roles = user.roles
        token.id = user.id
      }

      const shouldRefreshTime = Math.round(
        token.accessTokenExpires - 5 * 60 * 1000 - Date.now()
      )

      if (shouldRefreshTime > 0) {
        return token
      }

      return await refreshAccessToken(token)
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken
      session.user.accessTokenExpires = token.accessTokenExpires
      session.user.username = token.username
      session.user.roles = token.roles
      session.user.id = token.id
      session.error = token?.error
      return Promise.resolve(session)
    },
  },
  pages: {
    signIn: '/login',
  },
}

export default (req, res) => NextAuth(req, res, options)
