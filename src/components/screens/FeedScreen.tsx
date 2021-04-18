import React from 'react'
import { usePostLike } from '../../infra'
import { Post } from '../../services'
import {
  Button,
  PostCard,
  PostCardContent,
  PostCardHeader,
  PostCardMedia,
} from '../commons'
import { ListItem } from '../commons/ListItem'
import { Box, GridCol, GridContainer, GridRow, Text } from '../foundation'
import { HeartIcon } from '../icons'

interface FeedScreenProps {
  posts: Post[]
  user: {
    id: string
    username: string
  }
}

export function FeedScreen({ posts, user }: FeedScreenProps): JSX.Element {
  const { clientPosts, like, pending } = usePostLike(posts)

  return (
    <GridContainer>
      <GridRow>
        <GridCol
          flexDirection="column"
          alignItems="center"
          size={{ md: 7, xs: 12 }}
        >
          {clientPosts.map((post) => {
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
