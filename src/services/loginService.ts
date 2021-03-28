type HttpClientOptions = Omit<RequestInit, 'headers' | 'body'> & {
  headers?: RequestInit['headers']
  body: Record<string, unknown>
}

async function HttpClient<ResponseData = unknown>(
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

export async function login({
  username,
  password,
}: LoginServiceOptions): Promise<void> {
  await HttpClient<LoginResponse>(
    'https://instalura-api-omariosouto.vercel.app/api/login',
    {
      method: 'POST',
      body: { username, password },
    },
  )
}
