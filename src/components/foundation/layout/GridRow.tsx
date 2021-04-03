import styled, { css, CSSProperties } from 'styled-components'
import { propsToStyle, ResponsiveBreakpoints } from '../../../theme'

export interface GridRowProps {
  alignItems?: ResponsiveBreakpoints<CSSProperties['alignItems']>
  children: React.ReactNode
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
  flexDirection?: ResponsiveBreakpoints<CSSProperties['flexDirection']>
  justifyContent?: ResponsiveBreakpoints<CSSProperties['justifyContent']>
  marginLeft?: ResponsiveBreakpoints<CSSProperties['marginLeft']>
  marginRight?: ResponsiveBreakpoints<CSSProperties['marginRight']>
}

export const GridRow = styled.div<GridRowProps>(
  ({
    alignItems,
    flex,
    flexDirection,
    justifyContent,
    marginLeft,
    marginRight,
  }) => {
    return css`
      display: flex;
      flex-wrap: wrap;
      margin-right: -16px;
      margin-left: -16px;
      ${propsToStyle({
        alignItems,
        flex,
        flexDirection,
        justifyContent,
        marginLeft,
        marginRight,
      })}
    `
  },
)
