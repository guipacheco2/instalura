import React from 'react'
import { Category, FAQScreen, FAQScreenProps } from '../../components/screens'

type FAQPageProps = FAQScreenProps

export default function FAQPage(props: FAQPageProps): JSX.Element {
  return <FAQScreen {...props} />
}

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
