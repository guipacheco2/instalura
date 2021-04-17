import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import './instagram.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
