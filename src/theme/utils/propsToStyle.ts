import {
  css,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components'
import { breakpointNames } from '../breakpoints'
import { breakpointsMedia } from './breakpointsMedia'

export function propsToStyle(
  props: Record<string, (string | number) | (string | number)[]>,
): FlattenSimpleInterpolation[] {
  const entries = Object.entries(props)

  if (entries.length === 0) {
    throw new Error('Utilize com pelo menos uma prop')
  }

  const filledEntries = entries.filter((entry) => entry[1])

  if (filledEntries.length === 0) {
    return []
  }

  const styles = filledEntries.map(([name, value]) => {
    if (Array.isArray(value)) {
      const breakpoints = value.reduce<Record<string, SimpleInterpolation>>(
        (sum, value, i) => {
          sum[breakpointNames[i]] = css({ [name]: value })
          return sum
        },
        {},
      )

      return breakpointsMedia(breakpoints)
    }

    return css({ [name]: value })
  })

  return styles
}
