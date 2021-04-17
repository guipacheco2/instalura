import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '../foundation'
import { MoreIcon } from '../icons'
import { Avatar } from './Avatar'
import { IconButton } from './IconButton'

const StyledPostCardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`

interface PostCardHeaderProps {
  avatarSrc: string
  username: string
}

export function PostCardHeader({
  avatarSrc,
  username,
}: PostCardHeaderProps): JSX.Element {
  return (
    <StyledPostCardHeader>
      <Box padding="12px">
        <Avatar size="medium" src={avatarSrc} alt={username} />
      </Box>

      <Box flexGrow={1} padding="12px">
        <Text variant="subTitle">{username}</Text>
      </Box>

      <IconButton>
        <MoreIcon />
      </IconButton>
    </StyledPostCardHeader>
  )
}
