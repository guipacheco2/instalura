import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { breakpointsMedia, createBreakpoints } from '../../../theme'

export interface GridColProps {
  children: React.ReactNode
  size?: number | number[]
  offset?: number | number[]
}

export const GridCol = styled.div<GridColProps>`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  ${gridSize}
  ${gridOffset}
`

function gridSize({ size }: GridColProps): FlattenSimpleInterpolation {
  if (!size) return []

  if (typeof size === 'number') {
    return css`
      flex: 0 0 ${(100 * size) / 12}%;
      max-width: ${(100 * size) / 12}%;
    `
  }

  const breakpoints = createBreakpoints(
    size.map(
      (s) => css`
        flex: 0 0 ${(100 * s) / 12}%;
        max-width: ${(100 * s) / 12}%;
      `,
    ),
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
    offset.map(
      (o) => css`
        margin-left: ${(100 * o) / 12}%;
      `,
    ),
  )

  return breakpointsMedia(breakpoints)
}
