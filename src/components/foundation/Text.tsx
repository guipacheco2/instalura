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
  color?: 'primary.main' | 'tertiary.main' | 'tertiary.light'
  textAlign?: ResponsiveBreakpoints<CSSProperties['textAlign']>
  marginBottom?: ResponsiveBreakpoints<CSSProperties['marginBottom']>
}

const TextBase = styled.span<TextBaseProps>(
  ({ variant, theme, color, textAlign, marginBottom }) => {
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
      ${propsToStyle({ textAlign, marginBottom })}
    `
  },
)

export interface TextProps<C extends React.ElementType = React.ElementType>
  extends TextBaseProps {
  children?: React.ReactNode
  as?: C
}

export type TextPropsGeneric<C extends React.ElementType> = TextProps<C> &
  Omit<React.ComponentProps<C>, keyof TextProps>

export function Text<C extends React.ElementType = 'span'>({
  as,
  variant,
  color,
  textAlign,
  marginBottom,
  className,
  children,
}: TextPropsGeneric<C>): JSX.Element {
  return (
    <TextBase
      className={className}
      as={as as never}
      variant={variant}
      color={color}
      textAlign={textAlign}
      marginBottom={marginBottom}
    >
      {children}
    </TextBase>
  )
}
