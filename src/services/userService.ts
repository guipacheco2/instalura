import { GetServerSidePropsContext } from 'next'
import { httpClient, isStagingEnv } from '../infra'
import { AuthService } from './AuthService'

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master.omariosouto.vercel.app'
  : 'https://instalura-api.omariosouto.vercel.app'

export const userService = {
  async getProfilePage(
    ctx: GetServerSidePropsContext,
  ): Promise<{ posts: any; user: { totalLikes: number } }> {
    const url = `${BASE_URL}/api/users/posts`

    try {
      const token = await AuthService(ctx).getToken()
      const response = await httpClient<any>(url, {
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
