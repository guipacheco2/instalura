import 'styled-components'
import { colors } from './colors'

// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string
    borderRadius: string
    transition: string
    colors: {
      background: {
        light: {
          color: string
        }
        main: {
          color: string
        }
      }
      borders: {
        main: {
          color: string
        }
      }
      primary: {
        main: {
          color: string
          contrastText: string
        }
      }
      secondary: {
        main: {
          color: string
          contrastText: string
        }
      }
      tertiary: {
        main: {
          color: string
          contrastText: string
        }
        light: {
          color: string
          contrastText: string
        }
      }
    }
  }
}

export const theme = {
  colors,
  borderRadius: '12px',
  fontFamily: "'Rubik', sans-serif",
  transition: '200ms ease-in-out',
}
