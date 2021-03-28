import get from 'lodash.get'
import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import {
  breakpointsMedia,
  propsToStyle,
  ResponsiveBreakpoints,
} from '../../theme'

interface StyledButtonProps {
  variant?: 'primary.main' | 'secondary.main'
  margin?: ResponsiveBreakpoints<CSSProperties['margin']>
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  ghost?: boolean
  fullWidth?: boolean
  href?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
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
  children: React.ReactNode
}

export type ButtonPropsGeneric<C extends React.ElementType> = ButtonProps<C> &
  Omit<React.ComponentProps<C>, keyof ButtonProps>

export function Button<C extends React.ElementType = 'button'>({
  as,
  variant,
  display,
  fullWidth,
  ghost,
  margin,
  href,
  children,
  onClick,
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
