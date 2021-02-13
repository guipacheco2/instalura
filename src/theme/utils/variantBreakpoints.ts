import {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components'
import { breakpointNames } from '../breakpoints'
import { breakpointsMedia } from './breakpointsMedia'

type Styled = FlattenInterpolation<ThemeProps<DefaultTheme>>

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
  styled?: Record<string, Styled>,
): FlattenSimpleInterpolation[] {
  const breakpoints = variants.reduce<Record<string, Styled | string>>(
    (sum, current, i) => {
      sum[breakpointNames[i]] = styled ? styled[current] : current
      return sum
    },
    {},
  )

  return breakpointsMedia(breakpoints)
}
