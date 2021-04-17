import styled, { css } from 'styled-components'

interface AvatarProps {
  size?: 'small' | 'medium'
}

const small = css`
  width: 32px;
  height: 32px;
`

const medium = css`
  width: 56px;
  height: 56px;
`

export const Avatar = styled.img<AvatarProps>(({ size = 'small' }) => {
  const sizeStyle = size === 'small' ? small : medium

  return css`
    border-radius: 100%;
    ${sizeStyle}
  `
})
