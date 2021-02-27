import React, { useState } from 'react'
import { ErrorAnimation } from '../animations'
import { SuccessAnimation } from '../animations/SuccessAnimation'
import { Button } from '../commons'
import { TextField } from '../forms'
import { Box, Text } from '../foundation'

enum FormStates {
  DEFAULT,
  LOADING,
  DONE,
  ERROR,
}

interface RequestCreateUserPayload {
  username: string
  name: string
}

function requestCreateUser({ username, name }: RequestCreateUserPayload) {
  return fetch('https://instalura-api.vercel.app/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, name }),
  }).then((respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      return respostaDoServidor.json()
    }

    throw new Error('Não foi possível cadastrar o usuário agora :(')
  })
}

function useFormCadastro() {
  const [submissionStatus, setSubmissionStatus] = useState<FormStates>(
    FormStates.DEFAULT,
  )

  const [userInfo, setUserInfo] = useState({ username: '', name: '' })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name')

    setUserInfo({ ...userInfo, [fieldName]: event.target.value })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmissionStatus(FormStates.LOADING)

    requestCreateUser(userInfo)
      .then(() => {
        setSubmissionStatus(FormStates.DONE)
      })
      .catch(() => {
        setSubmissionStatus(FormStates.ERROR)
      })
  }

  return {
    handleSubmit,
    userInfo,
    handleChange,
    submissionStatus,
  }
}

export function FormCadastro(): JSX.Element {
  const {
    handleSubmit,
    userInfo,
    handleChange,
    submissionStatus,
  } = useFormCadastro()

  const isFormInvalid =
    userInfo.username.length === 0 || userInfo.name.length === 0

  return (
    <form onSubmit={handleSubmit}>
      <Text variant="title" as="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        as="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo que está rolando no bairro, complete
        seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="username"
          value={userInfo.username}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid || submissionStatus === FormStates.LOADING}
        fullWidth
      >
        Cadastrar
      </Button>

      <Box display="flex" justifyContent="center">
        {submissionStatus === FormStates.DONE && <SuccessAnimation />}
        {submissionStatus === FormStates.ERROR && <ErrorAnimation />}
      </Box>
    </form>
  )
}
