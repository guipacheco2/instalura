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
  paragraph1: css(({ theme }) => theme.typographyVariants.paragraph1),
  smallestException: css(
    ({ theme }) => theme.typographyVariants.smallestException,
  ),
  subTitle: css(({ theme }) => theme.typographyVariants.subTitle),
  title: css(
    ({ theme }) => css`
      ${css(theme.typographyVariants.titleXS)}
      ${breakpointsMedia({
        md: css(theme.typographyVariants.title),
      })}
    `,
  ),
  titleXs: css(({ theme }) => theme.typographyVariants.titleXS),
}

type variants = keyof typeof TextStyleVariants

export interface StyledTextProps {
  color?:
    | 'primary.main'
    | 'secondary.main'
    | 'tertiary.main'
    | 'tertiary.light'
    | 'error.main'
  dangerouslySetInnerHTML?: React.DOMAttributes<HTMLDivElement>['dangerouslySetInnerHTML']
  marginBottom?: ResponsiveBreakpoints<CSSProperties['marginBottom']>
  role?: string
  textAlign?: ResponsiveBreakpoints<CSSProperties['textAlign']>
  variant: variants | { md: variants; xs: variants }
  whiteSpace?: ResponsiveBreakpoints<CSSProperties['whiteSpace']>
}

const StyledText = styled.span<StyledTextProps>(
  ({ color, marginBottom, textAlign, theme, variant, whiteSpace }) => {
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
      ${propsToStyle({ marginBottom, textAlign, whiteSpace })}
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
  children,
  className,
  color,
  dangerouslySetInnerHTML,
  marginBottom,
  role,
  textAlign,
  variant,
  whiteSpace,
}: TextPropsGeneric<C>): JSX.Element {
  return (
    <StyledText
      className={className}
      as={as as never}
      variant={variant}
      color={color}
      textAlign={textAlign}
      whiteSpace={whiteSpace}
      role={role}
      marginBottom={marginBottom}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </StyledText>
  )
}
