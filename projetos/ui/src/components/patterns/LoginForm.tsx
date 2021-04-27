import { Box, Button, ErrorAnimation, TextField } from '@instalura/ui'
import React, { useCallback } from 'react'
import * as yup from 'yup'
import { FormStates, useForm } from '../../infra'

const loginSchema = yup.object().shape({
  senha: yup
    .string()
    .required('"Senha" é obrigatória')
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
  usuario: yup
    .string()
    .required('"Usuario" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
})

export interface LoginFormProps {
  onSubmit: (values: Record<string, string>) => void
  submissionStatus: FormStates
}

export function LoginForm({
  onSubmit,
  submissionStatus,
}: LoginFormProps): JSX.Element {
  const initialValues = {
    senha: '',
    usuario: '',
  }

  const form = useForm({
    initialValues,
    onSubmit,
    validateSchema: useCallback(async function validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      })
    }, []),
  })

  const isFormDisabled =
    !form.isValid ||
    submissionStatus === FormStates.LOADING ||
    submissionStatus === FormStates.DONE

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
          md: 'initial',
          xs: '0 auto',
        }}
        fullWidth
        disabled={isFormDisabled}
      >
        Entrar
      </Button>

      <Box display="flex" justifyContent="center">
        {submissionStatus === FormStates.ERROR && <ErrorAnimation />}
      </Box>
    </form>
  )
}
