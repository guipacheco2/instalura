import React from 'react'
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
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </MenuWrapperCentralSide>
      <MenuWrapperRightSide>
        <Button type="button" ghost variant="secondary.main">
          Entrar
        </Button>
        <Button type="button" variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapperRightSide>
    </MenuWrapper>
  )
}
