import {
  Box,
  Button,
  FormStates,
  GridCol,
  GridContainer,
  GridRow,
  Link,
  LoginForm,
  Logo,
  Text,
} from '@instalura/ui'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { login } from '../../services'
import { useWebsitePageContext } from '../wrappers'

export function LoginScreen(): JSX.Element {
  const router = useRouter()

  const { handleClickSignOn } = useWebsitePageContext()

  const [submissionStatus, setSubmissionStatus] = useState<FormStates>(
    FormStates.DEFAULT,
  )

  useEffect(() => {
    if (submissionStatus === FormStates.DONE) {
      router.push('/app/feed')
    }
  }, [router, submissionStatus])

  return (
    <GridContainer display="flex" flex="1" alignItems="center">
      <GridRow flex="1" alignItems="center" justifyContent="center">
        <GridCol
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          size={{ lg: 4, md: 6, xs: 12 }}
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="37px"
            marginBottom="37px"
          >
            <Link href="/">
              <Logo size="large" />
            </Link>
          </Box>

          <LoginForm
            submissionStatus={submissionStatus}
            onSubmit={(values) => {
              setSubmissionStatus(FormStates.LOADING)

              login({
                password: values.senha,
                username: values.usuario,
              })
                .then(() => {
                  setSubmissionStatus(FormStates.DONE)
                })
                .catch(() => {
                  setSubmissionStatus(FormStates.ERROR)
                })
            }}
          />

          <Text
            as="p"
            variant="paragraph1"
            color="tertiary.light"
            textAlign="center"
          >
            {'Não tem uma conta? '}
            <Button
              ghost
              variant="secondary.main"
              onClick={(event) => {
                event.preventDefault()
                handleClickSignOn()
              }}
            >
              Cadastre-se
            </Button>
          </Text>
        </GridCol>

        <GridCol size={{ md: 6, xs: 12 }}>
          <Box display="flex" justifyContent="center">
            <img
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
