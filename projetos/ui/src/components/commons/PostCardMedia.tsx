import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const StyledPostCardMedia = styled.div(
  ({ onClick }) => css`
    cursor: ${onClick ? 'pointer' : 'default'};
    position: relative;
    height: ${onClick ? '350px' : 'auto'};
    overflow: hidden;
  `,
)

const StyledPostCardMediaOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 60%);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledPostCardMediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export interface PostCardMediaProps {
  children?: React.ReactNode
  filter: string
  imageSrc: string
  initialOver?: boolean
  onClick?: () => void
}

export function PostCardMedia({
  children,
  filter,
  imageSrc,
  initialOver = false,
  onClick,
}: PostCardMediaProps): JSX.Element {
  const [isOver, setOver] = useState(initialOver)

  return (
    <StyledPostCardMedia
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      onClick={onClick}
    >
      <StyledPostCardMediaImage
        className={`filter-${filter}`}
        src={imageSrc}
        loading="lazy"
      />

      {isOver && children && (
        <StyledPostCardMediaOverlay>{children}</StyledPostCardMediaOverlay>
      )}
    </StyledPostCardMedia>
  )
}
