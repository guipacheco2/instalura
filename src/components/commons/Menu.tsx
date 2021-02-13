import React from 'react'
import { Text } from '../foundation'
import { Button } from './Button'
import { Logo } from './Logo'
import {
  MenuWrapper,
  MenuWrapperCentralSide,
  MenuWrapperLeftSide,
  MenuWrapperRightSide,
} from './MenuWrapper'

const links = [
  { url: '/', name: 'Home' },
  { url: '/faq', name: 'Perguntas Frequentes' },
  { url: '/sobre', name: 'Sobre' },
]

export function Menu(): JSX.Element {
  return (
    <MenuWrapper>
      <MenuWrapperLeftSide>
        <Logo />
      </MenuWrapperLeftSide>
      <MenuWrapperCentralSide as="ul">
        {links.map((link) => (
          <li key={link.url}>
            <Text as="a" href={link.url} variant="paragraph1">
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapperCentralSide>
      <MenuWrapperRightSide>
        <Button type="button" ghost variant="secondary.main">
          <Text variant="paragraph1">Entrar</Text>
        </Button>
        <Button type="button" variant="primary.main">
          <Text variant="paragraph1">Cadastrar</Text>
        </Button>
      </MenuWrapperRightSide>
    </MenuWrapper>
  )
}
