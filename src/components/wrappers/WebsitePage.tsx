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

interface WebsitePageProps {
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

export function withWebsitePage<Props = Record<string, unknown>>(
  PageComponent: React.ComponentType<Props>,
  props: WebsitePageProps,
) {
  return function WebsitePage(nextProps: Props): JSX.Element {
    const [isSignOnModalOpen, handleClickSignOn, handleCloseSignOn] = useModal()

    const websitePageContextValue: WebsitePageContextProps = {
      handleClickSignOn,
    }

    return (
      <CustomThemeProvider>
        <Box
          flex={1}
          display="flex"
          flexWrap="wrap"
          flexDirection="column"
          justifyContent="space-between"
          backgroundColor="primary"
        >
          <SEO {...props.seoProps} />

          <Bubbles />

          <Modal isOpen={isSignOnModalOpen} onClose={handleCloseSignOn}>
            <FormCadastro />
          </Modal>

          {!props.disableMenu && (
            <GridContainer marginTop={{ xs: 18, md: 32 }}>
              <Menu onClickSignOn={handleClickSignOn} />
            </GridContainer>
          )}

          <WebsitePageContext.Provider value={websitePageContextValue}>
            <PageComponent {...nextProps} />
          </WebsitePageContext.Provider>

          <Footer />
        </Box>
      </CustomThemeProvider>
    )
  }
}
