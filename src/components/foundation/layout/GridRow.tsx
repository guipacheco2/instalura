import styled, { css, CSSProperties } from 'styled-components'
import { propsToStyle, ResponsiveBreakpoints } from '../../../theme'

export interface GridRowProps {
  marginLeft?: ResponsiveBreakpoints<CSSProperties['marginLeft']>
  marginRight?: ResponsiveBreakpoints<CSSProperties['marginRight']>
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
  flexDirection?: ResponsiveBreakpoints<CSSProperties['flexDirection']>
  justifyContent?: ResponsiveBreakpoints<CSSProperties['justifyContent']>
  alignItems?: ResponsiveBreakpoints<CSSProperties['alignItems']>
  children: React.ReactNode
}

export const GridRow = styled.div<GridRowProps>(
  ({
    marginLeft,
    marginRight,
    flex,
    flexDirection,
    alignItems,
    justifyContent,
  }) => {
    return css`
      display: flex;
      flex-wrap: wrap;
      margin-right: -16px;
      margin-left: -16px;
      ${propsToStyle({
        marginLeft,
        marginRight,
        flex,
        flexDirection,
        alignItems,
        justifyContent,
      })}
    `
  },
)
