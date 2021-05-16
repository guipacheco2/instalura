import { GetStaticProps } from 'next'
import { Category, FAQScreen, FAQScreenProps } from '../../components/screens'
import { WebsitePageProps, withWebsitePage } from '../../components/wrappers'

export default withWebsitePage(FAQScreen)

export const getStaticProps: GetStaticProps<
  FAQScreenProps & WebsitePageProps
> = async () => {
  const faqCategories: Category[] = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  )
    .then((res) => res.json())
    .then((res) => res.data)

  return {
    props: {
      faqCategories,
      seoProps: {
        headTitle: 'Perguntas Frequentes',
      },
    },
  }
}
