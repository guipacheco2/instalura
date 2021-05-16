import {
  Box,
  Bubbles,
  CustomThemeProvider,
  Footer,
  FormCadastro,
  FormStates,
  GridContainer,
  Menu,
  Modal,
  useModal,
} from '@instalura/ui'
import get from 'lodash.get'
import React, { createContext, useContext, useState } from 'react'
import { SEO, SEOProps } from '../commons'

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

interface RequestCreateUserPayload {
  name: string
  username: string
}

function requestCreateUser({ name, username }: RequestCreateUserPayload) {
  return fetch('https://instalura-api.vercel.app/api/users', {
    body: JSON.stringify({ name, username }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then((respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      return respostaDoServidor.json()
    }

    throw new Error('Não foi possível cadastrar o usuário agora :(')
  })
}

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

    const [submissionStatus, setSubmissionStatus] = useState<FormStates>(
      FormStates.DEFAULT,
    )

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
            <Box padding={{ md: '85px', xs: '16px' }}>
              <FormCadastro
                submissionStatus={submissionStatus}
                onSubmit={(values) => {
                  setSubmissionStatus(FormStates.LOADING)

                  requestCreateUser({
                    name: values.name,
                    username: values.username,
                  })
                    .then(() => {
                      setSubmissionStatus(FormStates.DONE)
                    })
                    .catch(() => {
                      setSubmissionStatus(FormStates.ERROR)
                    })
                }}
              />
            </Box>
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
