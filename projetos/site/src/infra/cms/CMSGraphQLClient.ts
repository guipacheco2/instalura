import { gql as GraphQLTag, GraphQLClient } from 'graphql-request'

export const gql = GraphQLTag

interface CMSGraphQLClient {
  query: (args: {
    query: string
    variables?: Record<string, unknown>
  }) => Promise<{
    data: {
      messages: unknown[]
    }
  }>
}

export function CMSGraphQLClient(
  { preview } = { preview: false },
): CMSGraphQLClient {
  const DatoCMSURL = preview
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/'

  const TOKEN = process.env.DATO_CMS_TOKEN

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })

  return {
    async query({ query, variables }) {
      const messages = await client.request<unknown[]>(query, variables)

      return {
        data: {
          messages,
        },
      }
    },
  }
}
