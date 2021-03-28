import { GetStaticProps } from 'next'
import React from 'react'
import { WebsitePageProps, withWebsitePage } from '../../components/wrappers'

function ProfileScreen(): JSX.Element {
  return (
    <div>
      Página de Profile!
      <img
        src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
        alt="Nicolas Cage"
      />
    </div>
  )
}

export default withWebsitePage(ProfileScreen)

export const getStaticProps: GetStaticProps<WebsitePageProps> = async () => {
  return {
    props: {
      seoProps: {
        headTitle: 'Profile',
      },
      disableMenu: true,
    },
  }
}
