import { DefaultTheme } from 'styled-components'
import { Colors, dark, light } from './colors'
import { ColorSchemaTypes } from './ColorSchemaContext'
import { typographyVariants, TypographyVariants } from './typographyVariants'

// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme {
    schema: ColorSchemaTypes
    fontFamily: string
    borderRadius: string
    transition: string
    colors: Colors
    typographyVariants: TypographyVariants
  }
}

const colors = { light, dark }

export function createTheme(colorSchema: ColorSchemaTypes): DefaultTheme {
  return {
    schema: colorSchema,
    colors: colors[colorSchema],
    typographyVariants,
    borderRadius: '12px',
    fontFamily: "'Rubik', sans-serif",
    transition: '200ms ease-in-out',
  }
}
