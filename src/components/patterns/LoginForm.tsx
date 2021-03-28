import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from '../../infra'
import { login } from '../../services'
import { Button } from '../commons'
import { TextField } from '../forms'

export function LoginForm(): JSX.Element {
  const router = useRouter()

  const initialValues = {
    usuario: '',
    senha: '',
  }

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      login({
        username: values.usuario,
        password: values.senha,
      }).then(() => {
        router.push('/app/profile')
      })
    },
  })

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        onChange={form.handleChange}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        onChange={form.handleChange}
      />
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
