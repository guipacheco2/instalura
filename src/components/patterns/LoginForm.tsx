import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import * as yup from 'yup'
import { useForm } from '../../infra'
import { login } from '../../services'
import { Button } from '../commons'
import { TextField } from '../forms'

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('"Usuario" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup
    .string()
    .required('"Senha" é obrigatória')
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
})

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
    validateSchema: useCallback(async function validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      })
    }, []),
  })

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touchedFields.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        error={form.errors.senha}
        isTouched={form.touchedFields.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
    </form>
  )
}
