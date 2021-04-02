import { destroyCookie, setCookie } from 'nookies'
import { isStagingEnv } from '../infra'

type HttpClientOptions = Omit<RequestInit, 'headers' | 'body'> & {
  body: Record<string, unknown>
  headers?: RequestInit['headers']
}

async function httpClient<ResponseData = unknown>(
  url: string,
  { body, headers, ...options }: HttpClientOptions,
): Promise<ResponseData> {
  return fetch(url, {
    body: JSON.stringify(body),
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    ...options,
  }).then((response) => {
    if (response.ok) {
      return response.json()
    }

    throw new Error('Falha em pegar os dados do servidor :(')
  })
}

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

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app'

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

  setCookieModule(null, 'APP_TOKEN', token, {
    maxAge: DAY_IN_SECONDS * 7,
    path: '/',
  })
}

export interface LogoutContext {
  destroyCookieModule?: typeof destroyCookie
}

export async function logout(ctx: LogoutContext = {}): Promise<void> {
  const { destroyCookieModule = destroyCookie } = ctx

  destroyCookieModule(null, 'APP_TOKEN')
}
