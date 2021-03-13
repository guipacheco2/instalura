import { Category, FAQScreen, FAQScreenProps } from '../../components/screens'
import { withWebsitePage } from '../../components/wrappers'

type FAQPageProps = FAQScreenProps

export default withWebsitePage<FAQPageProps>(FAQScreen, {
  seoProps: {
    headTitle: 'Perguntas Frequentes',
  },
})

export async function getStaticProps(): Promise<{ props: FAQPageProps }> {
  const faqCategories: Category[] = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  )
    .then((res) => res.json())
    .then((res) => res.data)

  return {
    props: {
      faqCategories,
    },
  }
}
