import 'styled-components'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { typographyVariants } from './typographyVariants'

// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string
    borderRadius: string
    transition: string
    colors: typeof colors
    typographyVariants: typeof typographyVariants
  }
}

export const theme = {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '12px',
  fontFamily: "'Rubik', sans-serif",
  transition: '200ms ease-in-out',
}

export { breakpointNames } from './breakpoints'
export * from './utils'
