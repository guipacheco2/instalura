import React, { createContext, useContext } from 'react'
import { CustomThemeProvider } from '../../theme'
import {
  Bubbles,
  Footer,
  Menu,
  Modal,
  SEO,
  SEOProps,
  useModal,
} from '../commons'
import { Box, GridContainer } from '../foundation'
import { FormCadastro } from '../patterns'

export interface WebsitePageProps {
  disableMenu?: boolean
  seoProps?: SEOProps
}

interface WebsitePageContextProps {
  handleClickSignOn: () => void
}

const WebsitePageContext = createContext({} as WebsitePageContextProps)

export function useWebsitePageContext(): WebsitePageContextProps {
  return useContext(WebsitePageContext)
}

export function withWebsitePage<Props>(
  PageComponent: React.ComponentType<Props>,
) {
  return function WebsitePage(props: WebsitePageProps): JSX.Element {
    const [isSignOnModalOpen, handleClickSignOn, handleCloseSignOn] = useModal()

    const websitePageContextValue: WebsitePageContextProps = {
      handleClickSignOn,
    }

    const { seoProps, disableMenu, ...otherProps } = props

    return (
      <CustomThemeProvider>
        <Box
          flex={1}
          display="flex"
          flexWrap="wrap"
          flexDirection="column"
          justifyContent="space-between"
          backgroundColor="background"
        >
          <SEO {...seoProps} />

          <Bubbles />

          <Modal isOpen={isSignOnModalOpen} onClose={handleCloseSignOn}>
            <FormCadastro />
          </Modal>

          {!disableMenu && (
            <GridContainer marginTop={{ xs: 18, md: 32 }}>
              <Menu onClickSignOn={handleClickSignOn} />
            </GridContainer>
          )}

          <WebsitePageContext.Provider value={websitePageContextValue}>
            <PageComponent {...(otherProps as Props)} />
          </WebsitePageContext.Provider>

          <Footer />
        </Box>
      </CustomThemeProvider>
    )
  }
}
