import { css, FlattenSimpleInterpolation } from 'styled-components'
import { breakpointsMedia } from './breakpointsMedia'
import { createBreakpoints } from './createBreakpoint'

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
      const values = value.map((v) => css({ [name]: v }))
      const breakpoints = createBreakpoints(values)
      return breakpointsMedia(breakpoints)
    }

    return css({ [name]: value })
  })

  return styles
}
