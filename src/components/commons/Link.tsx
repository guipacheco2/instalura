import NextLink from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface StyledLinkProps {
  color: 'primary'
}

const StyledLink = styled.a<StyledLinkProps>`
  color: inherit;
  ${({ theme, color }) =>
    color ? `color: ${theme.colors[color].main.color}` : 'color: inherit;'};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`

interface LinkProps extends StyledLinkProps {
  href: string
  children: React.ReactNode
}

export function Link({ children, href, ...props }: LinkProps): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  )
}
