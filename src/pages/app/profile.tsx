import { GetServerSideProps } from 'next'
import React from 'react'
import { WebsitePageProps, withWebsitePage } from '../../components/wrappers'
import { AuthService, userService } from '../../services'

function ProfileScreen(props: any): JSX.Element {
  return (
    <div>
      Página de Profile!
      <pre>{JSON.stringify(props, null, 4)}</pre>
      <img
        src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
        alt="Nicolas Cage"
      />
    </div>
  )
}

export default withWebsitePage(ProfileScreen)

export const getServerSideProps: GetServerSideProps<WebsitePageProps> = async (
  ctx,
) => {
  const auth = AuthService(ctx)
  const hasActiveSession = await auth.hasActiveSession()

  if (hasActiveSession) {
    const session = await auth.getSession()
    const profilePage = await userService.getProfilePage(ctx)

    return {
      props: {
        disableMenu: true,
        posts: profilePage.posts,
        seoProps: {
          headTitle: 'Profile',
        },
        user: {
          ...session,
          ...profilePage.user,
        },
      },
    }
  }

  ctx.res.writeHead(307, { location: '/login' })
  ctx.res.end()

  return {
    props: {
      disableMenu: true,
      seoProps: {
        headTitle: 'Profile',
      },
    },
  }
}
