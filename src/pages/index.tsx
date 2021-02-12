import React from 'react'
import { Footer, Home, Menu } from '../components'

export default function HomePage(): JSX.Element {
  return (
    <Home>
      <Menu />
      <Footer />
    </Home>
  )
}
