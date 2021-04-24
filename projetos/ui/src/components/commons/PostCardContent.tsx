import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '../foundation'
import { BookmarkIcon, MessageIcon, SendIcon } from '../icons'
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
  flex: 1;
`

export interface PostCardContentProps {
  actions: React.ReactNode
  description: string
}

export function PostCardContent({
  actions,
  description,
}: PostCardContentProps): JSX.Element {
  return (
    <StyledPostCardContent>
      <StyledPostCardContentActions>
        {actions}
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
            {description}
          </Text>
        </StyledPostCardContentMessageText>

        <Button variant="tertiary.light" smallPadding>
          Mais
        </Button>
      </StyledPostCardContentMessage>
    </StyledPostCardContent>
  )
}
