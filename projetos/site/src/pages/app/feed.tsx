import { GetServerSideProps } from 'next'
import { FeedScreen } from '../../components'
import { AppPageProps, withAppPage } from '../../components/wrappers'
import { AuthService, userService } from '../../services'

export default withAppPage(FeedScreen)

export const getServerSideProps: GetServerSideProps<AppPageProps> = async (
  ctx,
) => {
  const auth = AuthService(ctx)
  const hasActiveSession = await auth.hasActiveSession()

  if (hasActiveSession) {
    const user = await auth.getSession()
    const profilePage = await userService.getProfilePage(ctx)

    return {
      props: {
        posts: profilePage.posts,
        seoProps: {
          headTitle: 'Feed',
        },
        user,
      },
    }
  }

  ctx.res.writeHead(307, { location: '/login' })
  ctx.res.end()

  return {
    props: {
      seoProps: {
        headTitle: 'Feed',
      },
    },
  }
}
