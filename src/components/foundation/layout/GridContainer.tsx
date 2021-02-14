import styled, { css } from 'styled-components'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'

export interface GridContainerProps {
  children: React.ReactNode
}

export const GridContainer = styled.div<GridContainerProps>`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;
  ${breakpointsMedia({
    xs: css`
      max-width: initial;
      padding-right: 28px;
      padding-left: 28px;
    `,
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`
