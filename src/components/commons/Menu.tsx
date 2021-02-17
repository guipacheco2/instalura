import React from 'react'
import { useColorSchema, useToggleColorSchema } from '../../theme'
import { Text } from '../foundation'
import { BrightnessDarkIcon, BrightnessLightIcon } from '../icons'
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
  const toggleColorSchema = useToggleColorSchema()
  const colorSchema = useColorSchema()

  function handleClickBrightnessButton() {
    toggleColorSchema()
  }

  return (
    <MenuWrapper>
      <MenuWrapperLeftSide>
        <Logo />
      </MenuWrapperLeftSide>
      <MenuWrapperCentralSide as="ul">
        {links.map((link) => (
          <li key={link.url}>
            <Text
              as="a"
              href={link.url}
              variant={{ xs: 'smallestException', md: 'paragraph1' }}
            >
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapperCentralSide>
      <MenuWrapperRightSide>
        <Button
          type="button"
          ghost
          variant="secondary.main"
          onClick={handleClickBrightnessButton}
        >
          {colorSchema === 'light' ? (
            <BrightnessDarkIcon />
          ) : (
            <BrightnessLightIcon />
          )}
        </Button>
        <Button type="button" ghost variant="secondary.main">
          <Text variant={{ xs: 'smallestException', md: 'paragraph1' }}>
            Entrar
          </Text>
        </Button>
        <Button type="button" variant="primary.main">
          <Text variant={{ xs: 'smallestException', md: 'paragraph1' }}>
            Cadastrar
          </Text>
        </Button>
      </MenuWrapperRightSide>
    </MenuWrapper>
  )
}
