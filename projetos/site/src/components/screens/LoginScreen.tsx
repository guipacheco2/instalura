import React from 'react'
import { Link } from '..'
import { Button } from '../commons'
import { Logo } from '../commons/Logo'
import { Box, GridCol, GridContainer, GridRow, Text } from '../foundation'
import { LoginForm } from '../patterns'
import { useWebsitePageContext } from '../wrappers'

export function LoginScreen(): JSX.Element {
  const { handleClickSignOn } = useWebsitePageContext()

  return (
    <GridContainer display="flex" flex="1" alignItems="center">
      <GridRow flex="1" alignItems="center" justifyContent="center">
        <GridCol
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          size={{ lg: 4, md: 6, xs: 12 }}
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="37px"
            marginBottom="37px"
          >
            <Link href="/">
              <Logo size="large" />
            </Link>
          </Box>

          <LoginForm />

          <Text
            as="p"
            variant="paragraph1"
            color="tertiary.light"
            textAlign="center"
          >
            {'Não tem uma conta? '}
            <Button
              ghost
              variant="secondary.main"
              onClick={(event) => {
                event.preventDefault()
                handleClickSignOn()
              }}
            >
              Cadastre-se
            </Button>
          </Text>
        </GridCol>

        <GridCol size={{ md: 6, xs: 12 }}>
          <Box display="flex" justifyContent="center">
            <img
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
