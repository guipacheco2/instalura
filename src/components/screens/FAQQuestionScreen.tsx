import React from 'react'
import { Link } from '../commons'
import { Box, GridCol, GridContainer, GridRow, Text } from '../foundation'
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
    <GridContainer marginTop={{ xs: 32, md: 80 }}>
      <GridRow
        flexDirection={{
          xs: 'column-reverse',
          md: 'row',
        }}
      >
        <GridCol
          offset={{ sm: 0, lg: 1 }}
          size={{ xs: 12, md: 4, lg: 4 }}
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
          marginBottom={{ xs: 50, md: 0 }}
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
