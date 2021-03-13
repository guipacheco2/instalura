import { GetStaticProps } from 'next'
import React from 'react'
import { WebsitePageProps, withWebsitePage } from '../../components/wrappers'

function LoginScreen(): JSX.Element {
  return <div>Página de Login</div>
}

export default withWebsitePage(LoginScreen)

export const getStaticProps: GetStaticProps<WebsitePageProps> = async () => {
  return {
    props: {
      seoProps: {
        headTitle: 'Login',
      },
      disableMenu: true,
    },
  }
}
