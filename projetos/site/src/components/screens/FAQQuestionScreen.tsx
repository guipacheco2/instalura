import { Box, GridCol, GridContainer, GridRow, Link, Text } from '@instalura/ui'
import React from 'react'
import { Category, Question } from './FAQScreen'

export interface FAQQuestionScreenProps {
  category: Category
  question: Question
}

export function FAQQuestionScreen({
  category,
  question,
}: FAQQuestionScreenProps): JSX.Element {
  return (
    <GridContainer marginTop={{ md: 80, xs: 32 }}>
      <GridRow
        flexDirection={{
          md: 'row',
          xs: 'column-reverse',
        }}
      >
        <GridCol
          offset={{ lg: 1, sm: 0 }}
          size={{ lg: 4, md: 4, xs: 12 }}
          flexDirection="column"
        >
          <Text variant="title" color="tertiary.main" marginBottom="25px">
            Artigos
            <br />
            Relacionados
          </Text>
          <Box
            as="ul"
            listStyle="none"
            padding="24px 30px"
            backgroundColor="borders"
            borderRadius
          >
            {category.questions.map((currentQuestion) => (
              <Link
                key={currentQuestion.slug}
                href={`/faq/${currentQuestion.slug}`}
              >
                <Text
                  as="li"
                  variant="paragraph1"
                  color="primary.main"
                  marginBottom="16px"
                >
                  {currentQuestion.title}
                </Text>
              </Link>
            ))}
          </Box>
        </GridCol>

        <GridCol
          size={{ lg: 6 }}
          marginBottom={{ md: 0, xs: 50 }}
          flexDirection="column"
        >
          <Text variant="title" color="tertiary.main">
            {question.title}
          </Text>

          <Text
            as="p"
            variant="paragraph1"
            color="tertiary.light"
            dangerouslySetInnerHTML={{ __html: question.description }}
          />
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
