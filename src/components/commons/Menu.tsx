import React from 'react'
import { Logo } from '../../theme'
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
        <button type="button">Entrar</button>
        <button type="button">Cadastrar</button>
      </MenuWrapperRightSide>
    </MenuWrapper>
  )
}
