import { AppProps } from 'next/dist/next-server/lib/router/router'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppHead, GlobalStyle } from '../components'
import { theme } from '../theme'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Fragment>
      <AppHead />

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}
