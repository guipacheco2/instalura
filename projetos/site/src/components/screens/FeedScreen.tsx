import {
  Box,
  Button,
  GridCol,
  GridContainer,
  GridRow,
  HeartIcon,
  ListItem,
  PostCard,
  PostCardContent,
  PostCardHeader,
  PostCardMedia,
  Text,
} from '@instalura/ui'
import React from 'react'
import { usePostLike } from '../../infra'

interface FeedScreenProps {
  user: {
    id: string
    username: string
  }
}

export function FeedScreen({ user }: FeedScreenProps): JSX.Element {
  const { like, pending, posts } = usePostLike()

  return (
    <GridContainer>
      <GridRow>
        <GridCol
          flexDirection="column"
          alignItems="center"
          size={{ md: 7, xs: 12 }}
        >
          {posts.map((post) => {
            return (
              <PostCard key={post._id}>
                <PostCardHeader
                  avatarSrc="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
                  username="nic.cage"
                />
                <PostCardMedia filter={post.filter} imageSrc={post.photoUrl} />
                <PostCardContent
                  actions={
                    <Button
                      ghost
                      smallPadding
                      onClick={() => like(post._id)}
                      disabled={pending === post._id}
                    >
                      <HeartIcon
                        filled={post.likes.some(
                          (like) => like.user === user.id,
                        )}
                      />
                      {post.likes.length > 0 && (
                        <Box padding="8px">
                          <Text variant="titleXs">{post.likes.length}</Text>
                        </Box>
                      )}
                    </Button>
                  }
                  description={post.description}
                />
              </PostCard>
            )
          })}
        </GridCol>

        <GridCol
          display={{ md: 'flex', xs: 'none' }}
          size={{ md: 5, xs: 12 }}
          flexDirection="column"
        >
          <Box marginBottom="30px">
            <ListItem avatarSize="medium" />
          </Box>

          <Text variant="paragraph1" color="tertiary.light">
            Projetos da galera
          </Text>

          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
