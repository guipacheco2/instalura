import { DefaultTheme } from 'styled-components'
import { Colors, dark, light } from './colors'
import { ColorSchemaTypes } from './ColorSchemaContext'
import { typographyVariants, TypographyVariants } from './typographyVariants'

// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: Colors
    fontFamily: string
    schema: ColorSchemaTypes
    transition: string
    typographyVariants: TypographyVariants
  }
}

const colors = { dark, light }

export function createTheme(colorSchema: ColorSchemaTypes): DefaultTheme {
  return {
    borderRadius: '12px',
    colors: colors[colorSchema],
    fontFamily: "'Rubik', sans-serif",
    schema: colorSchema,
    transition: '200ms ease-in-out',
    typographyVariants,
  }
}
