import {
  Box,
  GridCol,
  GridContainer,
  GridRow,
  HeartIcon,
  PostCardMedia,
  ProfileAvatar,
  Text,
} from '@instalura/ui'
import React from 'react'
import { usePostLike } from '../../infra'

interface ProfileScreenProps {
  user: {
    id: string
    username: string
  }
}

export function ProfileScreen({ user }: ProfileScreenProps): JSX.Element {
  const { like, pending, posts } = usePostLike()

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
              <Box width="100%" marginBottom="16px" marginTop="16px">
                <PostCardMedia
                  onClick={() => pending !== post._id && like(post._id)}
                  filter={post.filter}
                  imageSrc={post.photoUrl}
                >
                  <HeartIcon
                    size="big"
                    filled={post.likes.some((like) => like.user === user.id)}
                  />
                </PostCardMedia>
              </Box>
            </GridCol>
          )
        })}
      </GridRow>
    </GridContainer>
  )
}
