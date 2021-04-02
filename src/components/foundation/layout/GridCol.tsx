import styled, {
  css,
  CSSProperties,
  FlattenSimpleInterpolation,
} from 'styled-components'
import {
  breakpointsMedia,
  createBreakpoints,
  propsToStyle,
  ResponsiveBreakpoints,
} from '../../../theme'

export interface GridColProps {
  alignItems?: ResponsiveBreakpoints<CSSProperties['alignItems']>
  children: React.ReactNode
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
  flexDirection?: ResponsiveBreakpoints<CSSProperties['flexDirection']>
  justifyContent?: ResponsiveBreakpoints<CSSProperties['justifyContent']>
  marginBottom?: ResponsiveBreakpoints<CSSProperties['marginBottom']>
  marginTop?: ResponsiveBreakpoints<CSSProperties['marginTop']>
  offset?: ResponsiveBreakpoints<number>
  paddingRight?: ResponsiveBreakpoints<CSSProperties['paddingRight']>
  size?: ResponsiveBreakpoints<number>
}

export const GridCol = styled.div<GridColProps>(
  ({
    alignItems,
    display,
    flex,
    flexDirection,
    justifyContent,
    marginBottom,
    marginTop,
    paddingRight,
  }) => {
    return css`
      padding-right: 16px;
      padding-left: 16px;
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
      display: flex;
      ${gridSize}
      ${gridOffset}
      ${propsToStyle({
        alignItems,
        display,
        flex,
        flexDirection,
        justifyContent,
        marginBottom,
        marginTop,
        paddingRight,
      })}
    `
  },
)

function gridSize({ size }: GridColProps): FlattenSimpleInterpolation {
  if (!size) return []

  if (typeof size === 'number') {
    return css`
      flex: 0 0 ${(100 * size) / 12}%;
      max-width: ${(100 * size) / 12}%;
    `
  }

  const breakpoints = createBreakpoints(
    size,
    (s) => css`
      flex: 0 0 ${(100 * s) / 12}%;
      max-width: ${(100 * s) / 12}%;
    `,
  )

  return breakpointsMedia(breakpoints)
}

function gridOffset({ offset }: GridColProps): FlattenSimpleInterpolation {
  if (!offset) return []

  if (typeof offset === 'number') {
    return css`
      margin-left: ${(100 * offset) / 12}%;
    `
  }

  const breakpoints = createBreakpoints(
    offset,
    (o) => css`
      margin-left: ${(100 * o) / 12}%;
    `,
  )

  return breakpointsMedia(breakpoints)
}
