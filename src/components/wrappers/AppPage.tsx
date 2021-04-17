import React, { createContext, useContext } from 'react'
import { CustomThemeProvider } from '../../theme'
import { AppHeader, Avatar, Logo, ProfileAvatar, SearchInput } from '../commons'
import { Box, GridCol, GridContainer, GridRow, Text } from '../foundation'
import { AddIcon, HomeIcon } from '../icons'

export interface AppPageProps {
  messages?: Record<string, string>
}

interface AppPageContextProps {
  getCMSContent: (cmsKey: string) => string
  handleClickSignOn: () => void
}

const AppPageContext = createContext({} as AppPageContextProps)

export function useAppPageContext(): AppPageContextProps {
  return useContext(AppPageContext)
}

const CardMediaImage = () => (
  <div style={{ marginBottom: 16, marginTop: 16, padding: 0 }}>
    <img
      style={{ width: '100%' }}
      src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
    />
  </div>
)

export function withAppPage<Props>(PageComponent: React.ComponentType<Props>) {
  return function AppPage(props: AppPageProps): JSX.Element {
    // const appPageContextValue: AppPageContextProps = {
    //   getCMSContent: (cmsKey) => get(props.messages, cmsKey),
    // }

    return (
      <CustomThemeProvider>
        <Box display="flex" flexDirection="column" flex={1}>
          <AppHeader>
            <GridContainer>
              <GridRow>
                <GridCol alignItems="center">
                  <Logo />
                  <Box flexGrow={1} />
                  <Box margin="0 8px">
                    <SearchInput />
                  </Box>
                  <Box margin="0 8px">
                    <AddIcon />
                  </Box>
                  <Box margin="0 8px">
                    <HomeIcon />
                  </Box>
                  <Box margin="0 8px">
                    <Avatar
                      src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
                      alt="Nicolas Cage"
                    />
                  </Box>
                </GridCol>
              </GridRow>
            </GridContainer>
          </AppHeader>

          <Box flex={1} backgroundColor="background" variant="main">
            <GridContainer>
              <GridRow
                marginTop="60px"
                flexDirection={{ md: 'row', xs: 'column' }}
              >
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
          </Box>

          {/* <AppPageContext.Provider value={appPageContextValue}>
            <PageComponent {...(otherProps as Props)} />
          </AppPageContext.Provider> */}
        </Box>
      </CustomThemeProvider>
    )
  }
}
