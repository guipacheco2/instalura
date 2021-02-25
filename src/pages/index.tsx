import React, { useState } from 'react'
import {
  Box,
  Bubbles,
  Button,
  Footer,
  GridCol,
  GridContainer,
  GridRow,
  Menu,
  Modal,
  Text,
} from '../components'

export default function HomePage(): JSX.Element {
  const [isModalOpen, setModalState] = useState<boolean>(false)

  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="primary"
    >
      <Bubbles />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false)
        }}
      >
        <Box backgroundColor="primary">
          <Text variant="paragraph1" color="tertiary.main">
            Nosso conteúdo pro modal
          </Text>
        </Box>
      </Modal>

      <GridContainer marginTop={{ xs: 18, md: 32 }}>
        <Menu />
      </GridContainer>

      <GridContainer marginTop={{ xs: 32, md: 75 }}>
        <GridRow>
          <GridCol
            offset={{ md: 1 }}
            size={{ xs: 12, md: 5 }}
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <div>
              <Text
                variant="title"
                as="h1"
                color="tertiary.main"
                textAlign={{ xs: 'center', md: 'left' }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="paragraph1"
                as="p"
                color="tertiary.light"
                textAlign={{ xs: 'center', md: 'left' }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </Text>

              <Button
                variant="primary.main"
                margin={{ xs: 'auto', md: 'initial' }}
                display="block"
                onClick={() => {
                  setModalState((currentState) => !currentState)
                }}
              >
                Cadastrar
              </Button>
            </div>
          </GridCol>
          <GridCol size={{ xs: 12, md: 6 }} marginTop={{ xs: 40, md: 0 }}>
            <img
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </GridCol>
        </GridRow>
      </GridContainer>

      <Footer />
    </Box>
  )
}
