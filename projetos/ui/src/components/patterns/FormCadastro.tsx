import React, { useCallback } from 'react'
import * as yup from 'yup'
import { FormStates, useForm } from '../../infra'
import { ErrorAnimation, SuccessAnimation } from '../animations'
import { Button } from '../commons'
import { TextField } from '../forms'
import { Box, Text } from '../foundation'

const formCadastroSchema = yup.object().shape({
  name: yup
    .string()
    .required('"Nome" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  username: yup
    .string()
    .required('"Usuário" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
})

export interface FormCadastroProps {
  onSubmit: (values: Record<string, string>) => void
  submissionStatus: FormStates
}

export function FormCadastro({
  onSubmit,
  submissionStatus,
}: FormCadastroProps): JSX.Element {
  const initialValues = {
    name: '',
    username: '',
  }

  const form = useForm({
    initialValues,
    onSubmit,
    validateSchema: useCallback(async function validateSchema(values) {
      return formCadastroSchema.validate(values, {
        abortEarly: false,
      })
    }, []),
  })

  const isFormDisabled =
    !form.isValid ||
    submissionStatus === FormStates.LOADING ||
    submissionStatus === FormStates.DONE

  return (
    <form onSubmit={form.handleSubmit}>
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
          value={form.values.name}
          error={form.errors.name}
          isTouched={form.touchedFields.name}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="username"
          value={form.values.username}
          error={form.errors.username}
          isTouched={form.touchedFields.username}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormDisabled}
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
