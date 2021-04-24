import React from 'react'
import styled from 'styled-components'
import { Text } from '../foundation'
import { GithubIcon } from '../icons'
import { Avatar } from './Avatar'
import { Button } from './Button'
import { Link } from './Link'

const StyledListItem = styled.div`
  margin: 12px;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
`

const StyledListItemText = styled.div`
  margin-left: 8px;
  flex-direction: column;
  display: flex;
  flex-grow: 1;
`

const StyledListItemIcon = styled.div`
  margin-right: 4px;
`

export interface ListItemProps {
  avatarSize?: 'small' | 'medium'
}

export function ListItem({ avatarSize }: ListItemProps): JSX.Element {
  return (
    <StyledListItem>
      <Link href="/app/profile">
        <Avatar
          size={avatarSize}
          src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
        />
      </Link>

      <StyledListItemText>
        <Link href="/app/profile">
          <Text variant="paragraph1" color="tertiary.main" whiteSpace="nowrap">
            nic.cage
          </Text>
        </Link>
        <Link href="/app/profile">
          <Text variant="paragraph1" color="tertiary.light" whiteSpace="nowrap">
            Nicolas Cage
          </Text>
        </Link>
      </StyledListItemText>

      <Button ghost>
        <StyledListItemIcon>
          <GithubIcon />
        </StyledListItemIcon>

        <Text variant="paragraph1" color="secondary.main" whiteSpace="nowrap">
          Github
        </Text>
      </Button>
    </StyledListItem>
  )
}
