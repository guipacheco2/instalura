type HttpClientOptions = Omit<RequestInit, 'headers' | 'body'> & {
  body?: Record<string, unknown>
  headers?: RequestInit['headers']
}

export async function httpClient<ResponseData = unknown>(
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
