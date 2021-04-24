import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '../foundation'
import { MoreIcon } from '../icons'
import { Avatar } from './Avatar'
import { IconButton } from './IconButton'
import { Link } from './Link'

const StyledPostCardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`

export interface PostCardHeaderProps {
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
        <Link href="/app/profile">
          <Avatar size="medium" src={avatarSrc} alt={username} />
        </Link>
      </Box>

      <Box flexGrow={1} padding="12px">
        <Link href="/app/profile">
          <Text variant="subTitle" color="tertiary.main">
            {username}
          </Text>
        </Link>
      </Box>

      <IconButton>
        <MoreIcon />
      </IconButton>
    </StyledPostCardHeader>
  )
}
