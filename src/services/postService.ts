import { GetServerSidePropsContext } from 'next'
import { httpClient } from '../infra'
import { AuthService } from './AuthService'
import { BASE_URL } from './constans'

export interface Post {
  __v: number
  _id: string
  createdAt: string
  description: string
  filter: string
  likes: { _id: string; user: string }[]
  photoUrl: string
  updatedAt: string
  user: string
}

export const postService = {
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
