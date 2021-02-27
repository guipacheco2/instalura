import get from 'lodash.get'
import styled, { css, CSSProperties } from 'styled-components'
import {
  breakpointsMedia,
  propsToStyle,
  ResponsiveBreakpoints,
} from '../../theme'

interface ButtonProps {
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

export const Button = styled.button<ButtonProps>(
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
