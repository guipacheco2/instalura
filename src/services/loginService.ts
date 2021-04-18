import { destroyCookie, setCookie } from 'nookies'
import { httpClient } from '../infra/http/httpClient'
import { BASE_URL } from './constants'

interface LoginServiceOptions {
  password: string
  username: string
}

interface LoginResponse {
  data: {
    token: string
    user: {
      id: string
      name: string
      username: string
    }
  }
}

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN'

export interface LoginContext {
  httpClientModule?: typeof httpClient
  setCookieModule?: typeof setCookie
}

export async function login(
  { password, username }: LoginServiceOptions,
  ctx: LoginContext = {},
): Promise<void> {
  const { httpClientModule = httpClient, setCookieModule = setCookie } = ctx

  const loginResponse = await httpClientModule<LoginResponse>(
    `${BASE_URL}/api/login`,
    {
      body: { password, username },
      method: 'POST',
    },
  )

  const { token } = loginResponse.data
  const DAY_IN_SECONDS = 86400

  setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
    maxAge: DAY_IN_SECONDS * 7,
    path: '/',
  })
}

export interface LogoutContext {
  destroyCookieModule?: typeof destroyCookie
}

export async function logout(ctx: LogoutContext = {}): Promise<void> {
  const { destroyCookieModule = destroyCookie } = ctx

  destroyCookieModule(null, LOGIN_COOKIE_APP_TOKEN, { path: '/' })
}
