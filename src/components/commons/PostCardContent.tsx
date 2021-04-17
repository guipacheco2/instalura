import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '../foundation'
import { BookmarkIcon, HeartIcon, MessageIcon, SendIcon } from '../icons'
import { AvatarStack } from './AvatarStack'
import { Button } from './Button'
import { IconButton } from './IconButton'

const StyledPostCardContent = styled.div``

const StyledPostCardContentActions = styled.div`
  display: flex;
  padding: 12px;
`

const StyledPostCardContentMessage = styled.div`
  padding: 12px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

const StyledPostCardContentMessageText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0 8px;
`

interface PostCardContentProps {
  imageSrc: string
}

export function PostCardContent({
  imageSrc,
}: PostCardContentProps): JSX.Element {
  return (
    <StyledPostCardContent>
      <StyledPostCardContentActions>
        <Button ghost smallPadding>
          <HeartIcon filled />
          <Box padding="8px">
            <Text variant="titleXs">5.2k</Text>
          </Box>
        </Button>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <SendIcon />
        </IconButton>
        <Box flexGrow={1} />
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </StyledPostCardContentActions>

      <StyledPostCardContentMessage>
        <AvatarStack />

        <StyledPostCardContentMessageText>
          <Text variant="paragraph1" whiteSpace="nowrap">
            So excited to play this new, lorem lorem lorem lorem, lorem lorem
            lorem lorem
          </Text>
        </StyledPostCardContentMessageText>

        <Button variant="tertiary.light" smallPadding>
          Mais
        </Button>
      </StyledPostCardContentMessage>
    </StyledPostCardContent>
  )
}
