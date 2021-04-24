import React from 'react'
import styled from 'styled-components'
import { Avatar } from './Avatar'

const StyledAvatarStack = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: 15px;
`

const StyledAvatarStackItem = styled.div`
  border-radius: 100%;
  border: 3px solid #fff;
  margin-left: -15px;
`

export function AvatarStack(): JSX.Element {
  return (
    <StyledAvatarStack>
      <StyledAvatarStackItem>
        <Avatar src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" />
      </StyledAvatarStackItem>
      <StyledAvatarStackItem>
        <Avatar src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" />
      </StyledAvatarStackItem>
      <StyledAvatarStackItem>
        <Avatar src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" />
      </StyledAvatarStackItem>
    </StyledAvatarStack>
  )
}
