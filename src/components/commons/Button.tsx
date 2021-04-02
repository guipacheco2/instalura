import get from 'lodash.get'
import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import {
  breakpointsMedia,
  propsToStyle,
  ResponsiveBreakpoints,
} from '../../theme'

interface StyledButtonProps {
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  fullWidth?: boolean
  ghost?: boolean
  href?: string
  margin?: ResponsiveBreakpoints<CSSProperties['margin']>
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary.main' | 'secondary.main'
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
  ({ display, fullWidth, ghost, margin, theme }) => {
    return css`
      border: 0;
      cursor: pointer;
      font-weight: bold;
      opacity: 1;
      transition: opacity ${theme.transition};
      ${breakpointsMedia({
        md: css({ padding: '12px 43px' }),
        xs: css({ padding: '12px 26px' }),
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
      ${propsToStyle({ display, margin })}
      &:hover, &:focus {
        opacity: 0.5;
      }
    `
  },
)

export interface ButtonProps<C extends React.ElementType = React.ElementType>
  extends StyledButtonProps {
  as?: C
  children: React.ReactNode
}

export type ButtonPropsGeneric<C extends React.ElementType> = ButtonProps<C> &
  Omit<React.ComponentProps<C>, keyof ButtonProps>

export function Button<C extends React.ElementType = 'button'>({
  as,
  children,
  display,
  fullWidth,
  ghost,
  href,
  margin,
  onClick,
  variant,
  ...props
}: ButtonPropsGeneric<C>): JSX.Element {
  return (
    <StyledButton
      as={as as never}
      href={href}
      variant={variant}
      display={display}
      fullWidth={fullWidth}
      ghost={ghost}
      onClick={onClick}
      margin={margin}
      {...props}
    >
      {children}
    </StyledButton>
  )
}
