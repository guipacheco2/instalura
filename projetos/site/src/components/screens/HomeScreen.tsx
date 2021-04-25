import { Button, GridCol, GridContainer, GridRow, Text } from '@instalura/ui'
import React from 'react'
import { useWebsitePageContext } from '../wrappers'

export function HomeScreen(): JSX.Element {
  const { handleClickSignOn } = useWebsitePageContext()

  return (
    <GridContainer marginTop={{ md: 75, xs: 32 }}>
      <GridRow>
        <GridCol
          offset={{ md: 1 }}
          size={{ md: 5, xs: 12 }}
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
        >
          <div>
            <Text
              variant="title"
              as="h1"
              color="tertiary.main"
              textAlign={{ md: 'left', xs: 'center' }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              as="p"
              color="tertiary.light"
              textAlign={{ md: 'left', xs: 'center' }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </Text>

            <Button
              variant="primary.main"
              margin={{ md: 'initial', xs: 'auto' }}
              display="block"
              onClick={handleClickSignOn}
            >
              Cadastrar
            </Button>
          </div>
        </GridCol>
        <GridCol size={{ md: 6, xs: 12 }} marginTop={{ md: 0, xs: 40 }}>
          <img
            style={{ display: 'block', margin: 'auto' }}
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
          />
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
