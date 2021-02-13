import get from 'lodash.get'
import styled, { css } from 'styled-components'
import { breakpointsMedia } from '../../theme'

interface ButtonProps {
  variant: 'primary.main' | 'secondary.main'
  ghost?: boolean
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

export const Button = styled.button<ButtonProps>`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  ${breakpointsMedia({
    md: css`
      padding: 12px 43px;
    `,
  })}
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`
