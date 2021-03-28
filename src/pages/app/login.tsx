import { GetStaticProps } from 'next'
import { LoginScreen } from '../../components/screens'
import { WebsitePageProps, withWebsitePage } from '../../components/wrappers'

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
