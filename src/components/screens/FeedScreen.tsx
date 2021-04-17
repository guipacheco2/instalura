import React from 'react'
import {
  PostCard,
  PostCardContent,
  PostCardHeader,
  PostCardMedia,
} from '../commons'
import { ListItem } from '../commons/ListItem'
import { Box, GridCol, GridContainer, GridRow, Text } from '../foundation'

export function FeedScreen(): JSX.Element {
  return (
    <GridContainer>
      <GridRow>
        <GridCol
          flexDirection="column"
          alignItems="center"
          size={{ md: 7, xs: 12 }}
        >
          {Array.from({ length: 5 }).map((_, i) => {
            return (
              <PostCard key={i}>
                <PostCardHeader
                  avatarSrc="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
                  username="nic.cage"
                />
                <PostCardMedia imageSrc="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" />
                <PostCardContent imageSrc="" />
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
