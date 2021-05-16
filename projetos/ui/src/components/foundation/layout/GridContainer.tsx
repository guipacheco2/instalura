import styled, { css, CSSProperties } from 'styled-components'
import { propsToStyle, ResponsiveBreakpoints } from '../../../theme'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'

export interface GridContainerProps {
  alignItems?: ResponsiveBreakpoints<CSSProperties['alignItems']>
  children: React.ReactNode
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
  marginBottom?: ResponsiveBreakpoints<CSSProperties['marginBottom']>
  marginTop?: ResponsiveBreakpoints<CSSProperties['marginTop']>
}

export const GridContainer = styled.div<GridContainerProps>(
  ({ alignItems, display, flex, marginBottom, marginTop }) => {
    return css`
      width: 100%;
      padding-right: 28px;
      padding-left: 28px;
      margin-right: auto;
      margin-left: auto;
      z-index: 1;
      ${breakpointsMedia({
        lg: css`
          max-width: 1160px;
        `,
        md: css`
          max-width: 768px;
          padding-right: 16px;
          padding-left: 16px;
        `,
        sm: css`
          max-width: 576px;
        `,
        xl: css`
          max-width: 1222px;
        `,
        xs: css`
          max-width: initial;
          padding-right: 28px;
          padding-left: 28px;
        `,
      })}
      ${propsToStyle({
        alignItems,
        display,
        flex,
        marginBottom,
        marginTop,
      })}
    `
  },
)
