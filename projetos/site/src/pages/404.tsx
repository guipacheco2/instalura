import { GetStaticProps } from 'next'
import { Error404Screen } from '../components/screens'
import { WebsitePageProps, withWebsitePage } from '../components/wrappers'

export default withWebsitePage(Error404Screen)

export const getStaticProps: GetStaticProps<WebsitePageProps> = async () => {
  return {
    props: {
      seoProps: {
        headTitle: 'Não encontrado',
      },
    },
  }
}
