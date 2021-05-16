import jwt from 'jsonwebtoken'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import { httpClient } from '../infra/http'
import { BASE_URL } from './constants'
import { LOGIN_COOKIE_APP_TOKEN, logout } from './loginService'

interface AuthService {
  getSession(): Promise<Record<string, unknown>>
  getToken(): Promise<string>
  hasActiveSession(): Promise<boolean>
}

export function AuthService(ctx: GetServerSidePropsContext): AuthService {
  const cookies = parseCookies(ctx)
  const token = cookies[LOGIN_COOKIE_APP_TOKEN]

  return {
    async getSession() {
      const session = jwt.decode(token)

      if (typeof session !== 'object') throw new Error('Unexpected result')

      return session.user
    },

    async getToken() {
      return token
    },

    async hasActiveSession() {
      return httpClient(`${BASE_URL}/api/auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
      })
        .then(async ({ data }) => {
          if (data.authenticated) {
            return true
          }

          await logout()
          return false
        })
        .catch(async () => {
          await logout()
          return false
        })
    },
  }
}
