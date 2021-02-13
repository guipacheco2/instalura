import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components'
import { breakpointNames, breakpoints } from '../breakpoints'

export function breakpointsMedia(
  cssByBreakpoint: Partial<
    Record<keyof typeof breakpoints, FlattenSimpleInterpolation>
  >,
): FlattenSimpleInterpolation[] {
  return breakpointNames.map((breakpointName) => {
    return css`
      @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoint[breakpointName]}
      }
    `
  })
}

/**
 * Função para combinar variants com breakpoints
 *
 * @param variants ['smallestException', 'paragraph1']
 * @param styled { smallestException: css``, paragraph1: css`` }
 *
 * @returns css
 */
export function variantBreakpoints(
  variants: string[],
  styled: Record<string, FlattenInterpolation<ThemeProps<DefaultTheme>>>,
): FlattenSimpleInterpolation[] {
  const breakpoints = variants.reduce((sum, current, i) => {
    sum[breakpointNames[i]] = styled[current]
    return sum
  }, {})

  return breakpointsMedia(breakpoints)
}
