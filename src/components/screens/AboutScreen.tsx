import { gql } from 'graphql-request'
import React from 'react'
import { CMSGraphQLClient } from '../../infra'
import { DangerouslySetInnerHTML } from '../commons'
import { Box, GridCol, GridContainer, GridRow, Text } from '../foundation'
import { useWebsitePageContext } from '../wrappers'

export function AboutScreen(): JSX.Element {
  const { getCMSContent } = useWebsitePageContext()

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <GridContainer marginTop={{ md: '120px', xs: '32px' }}>
        <GridRow flex="1">
          <GridCol
            size={{ lg: 6, md: 6, xs: 12 }}
            offset={{ md: 2 }}
            flex={1}
            flexDirection="column"
          >
            <Text variant="title" as="h2" color="tertiary.main">
              {getCMSContent('pageAbout.pageTitle')}
            </Text>

            <DangerouslySetInnerHTML>
              {getCMSContent('pageAbout.pageDescription')}
            </DangerouslySetInnerHTML>
          </GridCol>
        </GridRow>
      </GridContainer>
    </Box>
  )
}

export async function getAboutScreenContent({
  preview,
}: {
  preview: boolean
}): Promise<any> {
  const query = gql`
    query {
      pageAbout {
        pageTitle
        pageDescription
      }
    }
  `

  const client = CMSGraphQLClient({ preview })

  const response = await client.query({ query })

  return response.data.messages
}
