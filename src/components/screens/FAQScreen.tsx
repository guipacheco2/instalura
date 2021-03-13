import React from 'react'
import { Link } from '../commons'
import { Box, GridCol, GridContainer, GridRow, Text } from '../foundation'

export interface Question {
  title: string
  slug: string
  description: string
}

export interface Category {
  title: string
  slug: string
  questions: Question[]
}

export interface FAQScreenProps {
  faqCategories: Category[]
}

export function FAQScreen({ faqCategories }: FAQScreenProps): JSX.Element {
  return (
    <GridContainer
      marginTop={{ xs: 32, md: 110 }}
      marginBottom={{ xs: 32, md: 100 }}
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
            <GridCol size={{ xs: 12, md: 6, lg: 3 }} key={category.title}>
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
