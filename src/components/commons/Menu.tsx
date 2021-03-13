import React from 'react'
import { useColorSchema, useToggleColorSchema } from '../../theme'
import { Text } from '../foundation'
import { BrightnessDarkIcon, BrightnessLightIcon } from '../icons'
import { Button } from './Button'
import { Link } from './Link'
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

interface MenuProps {
  onClickSignOn: () => void
}

export function Menu({ onClickSignOn }: MenuProps): JSX.Element {
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
            <Link href={link.url}>
              <Text variant={{ xs: 'smallestException', md: 'paragraph1' }}>
                {link.name}
              </Text>
            </Link>
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
        <Button as={Link} variant="secondary.main" ghost href="/app/login">
          <Text variant={{ xs: 'smallestException', md: 'paragraph1' }}>
            Entrar
          </Text>
        </Button>
        <Button type="button" variant="primary.main" onClick={onClickSignOn}>
          <Text variant={{ xs: 'smallestException', md: 'paragraph1' }}>
            Cadastrar
          </Text>
        </Button>
      </MenuWrapperRightSide>
    </MenuWrapper>
  )
}
