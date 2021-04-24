import React from 'react'
import { usePostLike } from '../../infra'
import { PostCardMedia, ProfileAvatar } from '../commons'
import { Box, GridCol, GridContainer, GridRow, Text } from '../foundation'

export function ProfileScreen(): JSX.Element {
  const { posts } = usePostLike()

  return (
    <GridContainer>
      <GridRow marginTop="60px" flexDirection={{ md: 'row', xs: 'column' }}>
        <GridCol justifyContent="center">
          <ProfileAvatar
            src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
            alt="Nicolas Cage"
          />
        </GridCol>
        <GridCol flexDirection="column">
          <GridRow>
            <GridCol flexDirection="column">
              <Text variant="titleXs" color="tertiary.main">
                234
              </Text>
              <Text variant="paragraph1" color="tertiary.light">
                Publicações
              </Text>
            </GridCol>
            <GridCol flexDirection="column">
              <Text variant="titleXs" color="tertiary.main">
                22k
              </Text>
              <Text variant="paragraph1" color="tertiary.light">
                Seguindo
              </Text>
            </GridCol>
            <GridCol flexDirection="column">
              <Text variant="titleXs" color="tertiary.main">
                134k
              </Text>
              <Text variant="paragraph1" color="tertiary.light">
                Seguidores
              </Text>
            </GridCol>
          </GridRow>
          <GridRow marginTop="30px" flexDirection="column">
            <GridCol>
              <Text variant="titleXs" color="tertiary.main">
                Nicolas Cage
              </Text>
            </GridCol>
            <GridCol>
              <Text variant="paragraph1" color="tertiary.light">
                A wholesome person responsible for the best movies ever.
              </Text>
            </GridCol>
          </GridRow>
        </GridCol>
      </GridRow>

      <GridRow marginTop="60px">
        {posts.map((post) => {
          return (
            <GridCol key={post._id} size={{ xs: 4 }}>
              <Box marginBottom="16px" marginTop="16px">
                <PostCardMedia filter={post.filter} imageSrc={post.photoUrl} />
              </Box>
            </GridCol>
          )
        })}
      </GridRow>
    </GridContainer>
  )
}
