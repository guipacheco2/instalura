import React from 'react'
import { Button } from '../commons'
import { TextField } from '../forms'

export function LoginForm(): JSX.Element {
  return (
    <form id="formCadastro" action="/app/profile">
      <TextField placeholder="Usuário" name="usuario" />
      <TextField placeholder="Senha" name="senha" type="password" />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  )
}
