import { AppProps } from 'next/dist/next-server/lib/router/router'
import React, { Fragment } from 'react'
import { AppHead } from '../components'
import { CustomThemeProvider } from '../theme'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Fragment>
      <AppHead />

      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </Fragment>
  )
}
