import React, { useState } from 'react'
import styled from 'styled-components'

const StyledPostCardMedia = styled.div`
  cursor: pointer;
  position: relative;
`

const StyledPostCardMediaOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 60%);
`

const StyledPostCardMediaImage = styled.img`
  width: 100%;
`

export interface PostCardMediaProps {
  filter: string
  imageSrc: string
  initialOver?: boolean
}

export function PostCardMedia({
  filter,
  imageSrc,
  initialOver = false,
}: PostCardMediaProps): JSX.Element {
  const [isOver, setOver] = useState(initialOver)

  return (
    <StyledPostCardMedia
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
    >
      {isOver && <StyledPostCardMediaOverlay>aaa</StyledPostCardMediaOverlay>}

      <StyledPostCardMediaImage
        className={`filter-${filter}`}
        src={imageSrc}
        loading="lazy"
      />
    </StyledPostCardMedia>
  )
}
