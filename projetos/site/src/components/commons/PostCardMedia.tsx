import React from 'react'
import styled from 'styled-components'

const StyledPostCardMedia = styled.div``

const StyledPostCardMediaImage = styled.img`
  width: 100%;
`

interface PostCardMediaProps {
  filter: string
  imageSrc: string
}

export function PostCardMedia({
  filter,
  imageSrc,
}: PostCardMediaProps): JSX.Element {
  return (
    <StyledPostCardMedia>
      <StyledPostCardMediaImage
        className={`filter-${filter}`}
        src={imageSrc}
        loading="lazy"
      />
    </StyledPostCardMedia>
  )
}
