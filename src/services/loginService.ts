import { destroyCookie, setCookie } from 'nookies'
import { isStagingEnv } from '../infra'

type HttpClientOptions = Omit<RequestInit, 'headers' | 'body'> & {
  headers?: RequestInit['headers']
  body: Record<string, unknown>
}

async function httpClient<ResponseData = unknown>(
  url: string,
  { headers, body, ...options }: HttpClientOptions,
): Promise<ResponseData> {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  }).then((response) => {
    if (response.ok) {
      return response.json()
    }

    throw new Error('Falha em pegar os dados do servidor :(')
  })
}

interface LoginServiceOptions {
  username: string
  password: string
}

interface LoginResponse {
  data: {
    token: string
    user: {
      id: string
      username: string
      name: string
    }
  }
}

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app'

export interface LoginContext {
  httpClientModule?: typeof httpClient
  setCookieModule?: typeof setCookie
}

export async function login(
  { username, password }: LoginServiceOptions,
  ctx: LoginContext = {},
): Promise<void> {
  const { httpClientModule = httpClient, setCookieModule = setCookie } = ctx

  const loginResponse = await httpClientModule<LoginResponse>(
    `${BASE_URL}/api/login`,
    {
      method: 'POST',
      body: { username, password },
    },
  )

  const { token } = loginResponse.data
  const DAY_IN_SECONDS = 86400

  setCookieModule(null, 'APP_TOKEN', token, {
    path: '/',
    maxAge: DAY_IN_SECONDS * 7,
  })
}

export interface LogoutContext {
  destroyCookieModule?: typeof destroyCookie
}

export async function logout(ctx: LogoutContext = {}): Promise<void> {
  const { destroyCookieModule = destroyCookie } = ctx

  destroyCookieModule(null, 'APP_TOKEN')
}
