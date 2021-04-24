import { GetStaticProps } from 'next'
import { AboutScreen, getAboutScreenContent } from '../components'
import { WebsitePageProps, withWebsitePage } from '../components/wrappers'

export default withWebsitePage(AboutScreen)

export const getStaticProps: GetStaticProps<
  WebsitePageProps & { messages: any }
> = async ({ preview }) => {
  const messages = await getAboutScreenContent({ preview })

  return {
    props: {
      messages,
    },
  }
}
