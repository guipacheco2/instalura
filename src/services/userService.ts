import { GetServerSidePropsContext } from 'next'
import { httpClient } from '../infra'
import { AuthService } from './AuthService'
import { BASE_URL } from './constans'
import { Post } from './interfaces'

export const userService = {
  async getProfilePage(
    ctx: GetServerSidePropsContext,
  ): Promise<{ posts: Post[]; user: { totalLikes: number } }> {
    const url = `${BASE_URL}/api/users/posts`

    try {
      const token = await AuthService(ctx).getToken()
      const response = await httpClient<{ data: Post[] }>(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })

      return {
        posts: response.data,
        user: {
          totalLikes: 100,
        },
      }
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts')
    }
  },
}
