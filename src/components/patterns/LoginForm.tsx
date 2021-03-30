import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import * as yup from 'yup'
import { useForm } from '../../infra'
import { login } from '../../services'
import { ErrorAnimation } from '../animations'
import { Button } from '../commons'
import { TextField } from '../forms'
import { Box } from '../foundation'

enum FormStates {
  DEFAULT,
  LOADING,
  DONE,
  ERROR,
}

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

interface LoginFormProps {
  onSubmit?: (values: Record<string, string>) => void
}

export function LoginForm({ onSubmit }: LoginFormProps): JSX.Element {
  const router = useRouter()

  const initialValues = {
    usuario: '',
    senha: '',
  }

  const [submissionStatus, setSubmissionStatus] = useState<FormStates>(
    FormStates.DEFAULT,
  )

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      if (onSubmit) {
        onSubmit(values)
        return
      }

      setSubmissionStatus(FormStates.LOADING)

      login({
        username: values.usuario,
        password: values.senha,
      })
        .then(() => {
          setSubmissionStatus(FormStates.DONE)
        })
        .catch(() => {
          setSubmissionStatus(FormStates.ERROR)
        })
    },
    validateSchema: useCallback(async function validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      })
    }, []),
  })

  useEffect(() => {
    if (submissionStatus === FormStates.DONE) {
      router.push('/app/profile')
    }
  }, [router, submissionStatus])

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
          xs: '0 auto',
          md: 'initial',
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
