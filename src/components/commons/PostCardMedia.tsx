import React from 'react'
import styled from 'styled-components'

const StyledPostCardMedia = styled.div``

const StyledPostCardMediaImage = styled.img`
  width: 100%;
`

interface PostCardMediaProps {
  imageSrc: string
}

export function PostCardMedia({ imageSrc }: PostCardMediaProps): JSX.Element {
  return (
    <StyledPostCardMedia>
      <StyledPostCardMediaImage src={imageSrc} />
    </StyledPostCardMedia>
  )
}
