import {
  AddIcon,
  AppHeader,
  Avatar,
  Box,
  CustomThemeProvider,
  GridCol,
  GridContainer,
  GridRow,
  HeartIcon,
  HomeIcon,
  IconButton,
  Link,
  Logo,
  Modal,
  SearchInput,
  useModal,
} from '@instalura/ui'
import React, { createContext, useContext, useState } from 'react'
import { Post, postService } from '../../services'
import { SEO, SEOProps } from '../commons'
import { PostCreate } from '../patterns'

export interface AppPageProps {
  posts?: Post[]
  seoProps?: SEOProps
}

interface AppPageContextProps {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
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

    const [posts, setPosts] = useState(props.posts)

    async function handlePostCreate(values: {
      description: string
      filter: string
      imageURL: string
    }) {
      const res = await postService.create(null, {
        description: values.description,
        filter: values.filter,
        photoUrl: values.imageURL,
      })

      setPosts((currentPosts) => {
        return [res.post, ...currentPosts]
      })

      handleClosePostCreate()
    }

    const appPageContextValue = { posts, setPosts }

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
                  <IconButton
                    aria-label="create post"
                    onClick={handleClickPostCreate}
                  >
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
