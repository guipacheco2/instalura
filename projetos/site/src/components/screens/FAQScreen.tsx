import { Box, GridCol, GridContainer, GridRow, Link, Text } from '@instalura/ui'
import React from 'react'

export interface Question {
  description: string
  slug: string
  title: string
}

export interface Category {
  questions: Question[]
  slug: string
  title: string
}

export interface FAQScreenProps {
  faqCategories: Category[]
}

export function FAQScreen({ faqCategories }: FAQScreenProps): JSX.Element {
  return (
    <GridContainer
      marginTop={{ md: 110, xs: 32 }}
      marginBottom={{ md: 100, xs: 32 }}
    >
      <GridRow>
        <GridCol
          size={{ xs: 12 }}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text variant="title" as="h1" color="tertiary.main">
            Como podemos te ajudar?
          </Text>
        </GridCol>
      </GridRow>
      <GridRow>
        {faqCategories &&
          faqCategories.map((category) => (
            <GridCol size={{ lg: 3, md: 6, xs: 12 }} key={category.title}>
              <Box>
                <Text
                  variant="title"
                  as="h2"
                  color="tertiary.main"
                  marginBottom="26px"
                >
                  {category.title}
                </Text>

                <Box as="ul" padding="0" listStyle="none">
                  {category.questions.map((question) => (
                    <li key={question.title}>
                      <Link href={`/faq/${question.slug}`}>
                        <Text
                          variant="paragraph1"
                          as="h3"
                          color="tertiary.light"
                        >
                          {question.title}
                        </Text>
                      </Link>
                    </li>
                  ))}
                </Box>
              </Box>
            </GridCol>
          ))}
      </GridRow>
    </GridContainer>
  )
}
