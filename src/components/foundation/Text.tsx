import get from 'lodash/get'
import React from 'react'
import styled, { css } from 'styled-components'
import { variantBreakpoints } from '../../theme'

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`

const TextStyleVariants = {
  smallestException,
  paragraph1,
}

type variants = 'smallestException' | 'paragraph1'

export interface TextBaseProps {
  variant: variants | variants[]
}

const TextBase = styled.span<TextBaseProps>`
  ${({ variant }) => {
    if (Array.isArray(variant)) {
      return variantBreakpoints(variant, TextStyleVariants)
    }

    return TextStyleVariants[variant]
  }}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`

interface TextProps<C extends React.ElementType = React.ElementType>
  extends TextBaseProps {
  children: React.ReactNode
  as?: C
}

export function Text<C extends React.ElementType = 'span'>({
  as,
  variant,
  children,
}: TextProps<C> & Omit<React.ComponentProps<C>, keyof TextProps>): JSX.Element {
  return (
    <TextBase as={as as never} variant={variant}>
      {children}
    </TextBase>
  )
}
