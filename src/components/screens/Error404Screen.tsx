import React from 'react'
import { NotFoundAnimation } from '../animations'
import { GridCol, GridContainer, GridRow, Text } from '../foundation'

export function Error404Screen(): JSX.Element {
  return (
    <GridContainer
      marginTop={{ xs: 32, md: 110 }}
      marginBottom={{ xs: 32, md: 100 }}
    >
      <GridRow>
        <GridCol
          size={{ xs: 12 }}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text variant="title" as="h1" color="tertiary.main">
            Página não encontrada
          </Text>
          <NotFoundAnimation />
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
