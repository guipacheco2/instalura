import React, { createContext, useContext } from 'react'
import { postService } from '../../services'
import { CustomThemeProvider } from '../../theme'
import {
  AppHeader,
  Avatar,
  IconButton,
  Link,
  Logo,
  Modal,
  SearchInput,
  SEO,
  SEOProps,
  useModal,
} from '../commons'
import { Box, GridCol, GridContainer, GridRow } from '../foundation'
import { AddIcon, HeartIcon, HomeIcon } from '../icons'
import { PostCreate } from '../patterns'

export interface AppPageProps {
  seoProps?: SEOProps
}

interface AppPageContextProps {
  TODO?: never
}

const AppPageContext = createContext({} as AppPageContextProps)

export function useAppPageContext(): AppPageContextProps {
  return useContext(AppPageContext)
}

export function withAppPage<Props>(PageComponent: React.ComponentType<Props>) {
  return function AppPage(props: AppPageProps): JSX.Element {
    const [
      isPostCreateModalOpen,
      handleClickPostCreate,
      handleClosePostCreate,
    ] = useModal()

    async function handlePostCreate(values: {
      filter: string
      imageURL: string
    }) {
      await postService.create(null, {
        description: 'Description sample',
        filter: values.filter,
        photoUrl: values.imageURL,
      })

      handleClosePostCreate()
    }

    const appPageContextValue = {}

    const { seoProps, ...otherProps } = props

    return (
      <CustomThemeProvider>
        <Box display="flex" flexDirection="column" flex={1}>
          <AppHeader>
            <GridContainer>
              <GridRow>
                <GridCol alignItems="center">
                  <Link href="/app/feed">
                    <Logo />
                  </Link>
                  <Box flexGrow={1} />
                  <Box margin="0 8px">
                    <SearchInput />
                  </Box>
                  <IconButton onClick={handleClickPostCreate}>
                    <AddIcon />
                  </IconButton>
                  <Link href="/app/feed">
                    <IconButton>
                      <HomeIcon />
                    </IconButton>
                  </Link>
                  <IconButton>
                    <HeartIcon />
                  </IconButton>
                  <Link href="/app/profile">
                    <IconButton>
                      <Avatar
                        src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
                        alt="Nicolas Cage"
                      />
                    </IconButton>
                  </Link>
                </GridCol>
              </GridRow>
            </GridContainer>
          </AppHeader>

          <SEO {...seoProps} />

          <Box flex={1} backgroundColor="background" variant="main">
            <AppPageContext.Provider value={appPageContextValue}>
              <PageComponent {...(otherProps as Props)} />
            </AppPageContext.Provider>
          </Box>

          <Modal
            position="center"
            isOpen={isPostCreateModalOpen}
            onClose={handleClosePostCreate}
          >
            <PostCreate onSubmit={handlePostCreate} />
          </Modal>
        </Box>
      </CustomThemeProvider>
    )
  }
}
