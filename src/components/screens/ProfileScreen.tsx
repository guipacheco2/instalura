import React from 'react'
import { ProfileAvatar } from '../commons'
import { GridCol, GridContainer, GridRow, Text } from '../foundation'

const CardMediaImage = () => (
  <div style={{ marginBottom: 16, marginTop: 16, padding: 0 }}>
    <img
      style={{ width: '100%' }}
      src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
    />
  </div>
)

export function ProfileScreen(): JSX.Element {
  return (
    <GridContainer>
      <GridRow marginTop="60px" flexDirection={{ md: 'row', xs: 'column' }}>
        <GridCol justifyContent="center">
          <ProfileAvatar
            src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
            alt="Nicolas Cage"
          />
        </GridCol>
        <GridCol flexDirection="column">
          <GridRow>
            <GridCol flexDirection="column">
              <Text variant="titleXs" color="tertiary.main">
                234
              </Text>
              <Text variant="paragraph1" color="tertiary.light">
                Publicações
              </Text>
            </GridCol>
            <GridCol flexDirection="column">
              <Text variant="titleXs" color="tertiary.main">
                22k
              </Text>
              <Text variant="paragraph1" color="tertiary.light">
                Seguindo
              </Text>
            </GridCol>
            <GridCol flexDirection="column">
              <Text variant="titleXs" color="tertiary.main">
                134k
              </Text>
              <Text variant="paragraph1" color="tertiary.light">
                Seguidores
              </Text>
            </GridCol>
          </GridRow>
          <GridRow marginTop="30px" flexDirection="column">
            <GridCol>
              <Text variant="titleXs" color="tertiary.main">
                Nicolas Cage
              </Text>
            </GridCol>
            <GridCol>
              <Text variant="paragraph1" color="tertiary.light">
                A wholesome person responsible for the best movies ever.
              </Text>
            </GridCol>
          </GridRow>
        </GridCol>
      </GridRow>

      <GridRow marginTop="60px">
        <GridCol size={{ xs: 4 }}>
          <CardMediaImage />
        </GridCol>
        <GridCol size={{ xs: 4 }}>
          <CardMediaImage />
        </GridCol>
        <GridCol size={{ xs: 4 }}>
          <CardMediaImage />
        </GridCol>
        <GridCol size={{ xs: 4 }}>
          <CardMediaImage />
        </GridCol>
        <GridCol size={{ xs: 4 }}>
          <CardMediaImage />
        </GridCol>
        <GridCol size={{ xs: 4 }}>
          <CardMediaImage />
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
