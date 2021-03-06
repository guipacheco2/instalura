import NextLink from 'next/link'
import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`

export interface LinkProps {
  children: React.ReactNode
  href: string
}

export function Link({ children, href, ...props }: LinkProps): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  )
}
