import 'styled-components'
import { breakpoints } from './breakpoints'
import { Colors, colors } from './colors'
import { TypographyVariants, typographyVariants } from './typographyVariants'

// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string
    borderRadius: string
    transition: string
    colors: Colors
    typographyVariants: TypographyVariants
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
