import get from 'lodash.get'
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

export interface StyledTextProps {
  variant: variants | { xs: variants; md: variants }
  color?: 'primary.main' | 'tertiary.main' | 'tertiary.light'
  textAlign?: ResponsiveBreakpoints<CSSProperties['textAlign']>
  marginBottom?: ResponsiveBreakpoints<CSSProperties['marginBottom']>
  href?: string
}

const StyledText = styled.span<StyledTextProps>(
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
  extends StyledTextProps {
  as?: C
  children?: React.ReactNode
}

export type TextPropsGeneric<C extends React.ElementType> = TextProps<C> &
  Omit<React.ComponentProps<C>, keyof TextProps>

export function Text<C extends React.ElementType = 'span'>({
  as,
  href,
  variant,
  color,
  textAlign,
  marginBottom,
  className,
  children,
}: TextPropsGeneric<C>): JSX.Element {
  return (
    <StyledText
      className={className}
      href={href}
      as={as as never}
      variant={variant}
      color={color}
      textAlign={textAlign}
      marginBottom={marginBottom}
    >
      {children}
    </StyledText>
  )
}
