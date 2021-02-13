import React from 'react'
import { Button, Footer, Home, Menu, Text } from '../components'

export default function HomePage(): JSX.Element {
  return (
    <Home>
      <Menu />

      <div>
        <Text
          variant="title"
          as="h1"
          color="tertiary.main"
          textAlign={['center', 'left']}
        >
          Compartilhe momentos e conecte-se com amigos
        </Text>
        <Text
          variant="paragraph1"
          as="p"
          color="tertiary.light"
          textAlign={['center', 'left']}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </Text>

        <Button
          variant="primary.main"
          margin={['auto', 'initial']}
          display="block"
        >
          Cadastrar
        </Button>
      </div>

      <Footer />
    </Home>
  )
}
