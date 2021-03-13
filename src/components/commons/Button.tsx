import get from 'lodash.get'
import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import {
  breakpointsMedia,
  propsToStyle,
  ResponsiveBreakpoints,
} from '../../theme'
import { Link } from './Link'

interface StyledButtonProps {
  variant: 'primary.main' | 'secondary.main'
  margin?: ResponsiveBreakpoints<CSSProperties['margin']>
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  ghost?: boolean
  fullWidth?: boolean
}

const ButtonGhost = css<ButtonProps>`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`

const ButtonDefault = css<ButtonProps>`
  color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.contrastText`)};

  background-color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.color`)};
`

const StyledButton = styled.button<ButtonProps>(
  ({ theme, margin, display, ghost, fullWidth }) => {
    return css`
      border: 0;
      cursor: pointer;
      font-weight: bold;
      opacity: 1;
      transition: opacity ${theme.transition};
      ${breakpointsMedia({
        xs: css({ padding: '12px 26px' }),
        md: css({ padding: '12px 43px' }),
      })}
      border-radius: ${theme.borderRadius};
      outline: initial;
      ${ghost ? ButtonGhost : ButtonDefault}
      &:disabled {
        cursor: not-allowed;
        opacity: 0.2;
      }
      ${fullWidth
        ? css`
            width: 100%;
          `
        : ''};
      ${propsToStyle({ margin, display })}
      &:hover, &:focus {
        opacity: 0.5;
      }
    `
  },
)

export interface ButtonProps<C extends React.ElementType = React.ElementType>
  extends StyledButtonProps {
  as?: C
  href?: string
  children: React.ReactNode
}

export type ButtonPropsGeneric<C extends React.ElementType> = ButtonProps<C> &
  Omit<React.ComponentProps<C>, keyof ButtonProps>

export function Button<C extends React.ElementType = 'button'>({
  variant,
  display,
  fullWidth,
  ghost,
  margin,
  href,
  children,
}: ButtonPropsGeneric<C>): JSX.Element {
  const isLink = Boolean(href)
  const componentTag = isLink ? Link : 'button'

  return (
    <StyledButton
      as={componentTag}
      href={href}
      variant={variant}
      display={display}
      fullWidth={fullWidth}
      ghost={ghost}
      margin={margin}
    >
      {children}
    </StyledButton>
  )
}
