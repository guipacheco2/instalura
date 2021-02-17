import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createTheme } from './createTheme'
import { GlobalStyle } from './GlobalStyle'

export interface ThemeProviderProps {
  children: React.ReactNode
}

export function CustomThemeProvider({
  children,
}: ThemeProviderProps): JSX.Element {
  return (
    <ThemeProvider theme={createTheme()}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
