import get from 'lodash.get'
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
  messages?: Record<string, string>
  seoProps?: SEOProps
}

interface WebsitePageContextProps {
  getCMSContent: (cmsKey: string) => string
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
      getCMSContent: (cmsKey) => get(props.messages, cmsKey),
      handleClickSignOn,
    }

    const { disableMenu, seoProps, ...otherProps } = props

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
            <GridContainer marginTop={{ md: 32, xs: 18 }}>
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
