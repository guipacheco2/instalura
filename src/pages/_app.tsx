import { AppProps } from 'next/dist/next-server/lib/router/router'
import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import * as theme from '../theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}
