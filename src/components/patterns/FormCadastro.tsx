import React, { useState } from 'react'
import { Button } from '../commons'
import { TextField } from '../forms'
import { Text } from '../foundation'

export function FormCadastro(): JSX.Element {
  const [userInfo, setUserInfo] = useState({
    usuario: '',
    email: '',
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name')

    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    })
  }

  const isFormInvalid =
    userInfo.usuario.length === 0 || userInfo.email.length === 0

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        console.log('O formulário ta pronto, vamos cadastrar de fato o usuario')
      }}
    >
      <Text variant="title" as="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        as="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está rolando no bairro, complete
        seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  )
}
