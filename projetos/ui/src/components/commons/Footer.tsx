import React from 'react'
import { Text } from '../foundation'
import { FooterWrapper } from './FooterWrapper'

export function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        <Text variant="paragraph1" color="tertiary.light">
          Orgulhosamente criado durante o
        </Text>{' '}
        <Text
          variant="paragraph1"
          as="a"
          href="https://www.alura.com.br/"
          color="tertiary.light"
        >
          Bootcamp Alura JAM Stack
        </Text>
      </p>
    </FooterWrapper>
  )
}
