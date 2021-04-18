import { GetServerSidePropsContext } from 'next'
import { httpClient } from '../infra'
import { AuthService } from './AuthService'
import { BASE_URL } from './constants'
import { Post } from './interfaces'

export const postService = {
  async create(
    ctx: GetServerSidePropsContext,
    body: {
      description: string
      filter: string
      photoUrl: string
    },
  ): Promise<{ post: Post }> {
    const url = `${BASE_URL}/api/posts`

    try {
      const token = await AuthService(ctx).getToken()

      const response = await httpClient<{ data: Post }>(url, {
        body,
        headers: {
          authorization: `Bearer ${token}`,
        },
        method: 'POST',
      })

      return {
        post: response.data,
      }
    } catch (err) {
      const newError = new Error('Erro ao criar post.')
      newError.stack = err.stack
      throw newError
    }
  },
  async like(
    ctx: GetServerSidePropsContext,
    postId: string,
  ): Promise<{ post: Post }> {
    const url = `${BASE_URL}/api/posts/${postId}/like`

    try {
      const token = await AuthService(ctx).getToken()

      const response = await httpClient<{ data: Post }>(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        method: 'POST',
      })

      return {
        post: response.data,
      }
    } catch (err) {
      const newError = new Error('Erro ao chamar like post endpoint.')
      newError.stack = err.stack
      throw newError
    }
  },
}
