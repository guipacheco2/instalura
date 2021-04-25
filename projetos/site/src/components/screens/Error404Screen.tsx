import {
  GridCol,
  GridContainer,
  GridRow,
  NotFoundAnimation,
  Text,
} from '@instalura/ui'
import React from 'react'

export function Error404Screen(): JSX.Element {
  return (
    <GridContainer
      marginTop={{ md: 110, xs: 32 }}
      marginBottom={{ md: 100, xs: 32 }}
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
