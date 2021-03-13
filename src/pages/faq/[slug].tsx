import { GetStaticPaths, GetStaticProps } from 'next'
import {
  Category,
  FAQQuestionScreen,
  FAQQuestionScreenProps,
  Question,
} from '../../components/screens'
import { WebsitePageProps, withWebsitePage } from '../../components/wrappers'

export default withWebsitePage(FAQQuestionScreen)

export const getStaticProps: GetStaticProps<
  FAQQuestionScreenProps & WebsitePageProps
> = async ({ params }) => {
  const faqCategories: Category[] = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  )
    .then((res) => res.json())
    .then((res) => res.data)

  const pageInfo = faqCategories.reduce(
    (acc, faqCategory) => {
      const foundQuestion = faqCategory.questions.find((question) => {
        if (question.slug === params.slug) {
          return true
        }

        return false
      })

      if (foundQuestion) {
        return {
          ...acc,
          category: faqCategory,
          question: foundQuestion,
        }
      }

      return acc
    },
    {} as {
      category: Category
      question: Question
    },
  )

  return {
    props: {
      category: pageInfo.category,
      question: pageInfo.question,
      seoProps: {
        headTitle: pageInfo.question.title,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const faqCategories: Category[] = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  )
    .then((res) => res.json())
    .then((res) => res.data)

  const paths = faqCategories.reduce((acc, faqCategory) => {
    const questionsPaths = faqCategory.questions.map((question) => {
      const questionSlug = question.slug
      return { params: { slug: questionSlug } }
    })

    return [...acc, ...questionsPaths]
  }, [])

  return {
    paths,
    fallback: false,
  }
}
