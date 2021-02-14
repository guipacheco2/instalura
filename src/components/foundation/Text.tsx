import get from 'lodash/get'
import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import {
  breakpointsMedia,
  createBreakpoints,
  propsToStyle,
  ResponsiveBreakpoints,
} from '../../theme'

const TextStyleVariants = {
  smallestException: css(
    ({ theme }) => theme.typographyVariants.smallestException,
  ),
  paragraph1: css(({ theme }) => theme.typographyVariants.paragraph1),
  title: css(
    ({ theme }) => css`
      ${css(theme.typographyVariants.titleXS)}
      ${breakpointsMedia({
        md: css(theme.typographyVariants.title),
      })}
    `,
  ),
}

type variants = keyof typeof TextStyleVariants

export interface TextBaseProps {
  variant: variants | { xs: variants; md: variants }
  color?: 'tertiary.main' | 'tertiary.light'
  textAlign?: ResponsiveBreakpoints<CSSProperties['textAlign']>
}

const TextBase = styled.span<TextBaseProps>(
  ({ variant, theme, color, textAlign }) => {
    return css`
      ${() => {
        if (typeof variant === 'string') {
          return TextStyleVariants[variant]
        }

        return breakpointsMedia(
          createBreakpoints(variant, (v) => TextStyleVariants[v]),
        )
      }}
      color: ${() => get(theme, `colors.${color}.color`)};
      ${propsToStyle({ textAlign })}
    `
  },
)

interface TextProps<C extends React.ElementType = React.ElementType>
  extends TextBaseProps {
  children: React.ReactNode
  as?: C
}

export function Text<C extends React.ElementType = 'span'>({
  as,
  variant,
  color,
  textAlign,
  children,
}: TextProps<C> & Omit<React.ComponentProps<C>, keyof TextProps>): JSX.Element {
  return (
    <TextBase
      as={as as never}
      variant={variant}
      color={color}
      textAlign={textAlign}
    >
      {children}
    </TextBase>
  )
}
