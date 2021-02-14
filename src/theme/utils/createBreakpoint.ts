import {
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components'
import { breakpointNames } from '../breakpoints'

export function createBreakpoints(
  values: FlattenSimpleInterpolation[],
): Record<string, SimpleInterpolation> {
  const breakpoints = values.reduce<Record<string, SimpleInterpolation>>(
    (sum, value, i) => {
      sum[breakpointNames[i]] = value
      return sum
    },
    {},
  )

  return breakpoints
}
