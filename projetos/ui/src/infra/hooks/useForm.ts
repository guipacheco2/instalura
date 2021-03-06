import React, { useEffect, useState } from 'react'

interface UseFormOptions {
  initialValues: Record<string, string>
  onSubmit: (values: Record<string, string>) => void
  validateSchema: (values: Record<string, string>) => Promise<unknown>
}

interface UseFormReturn {
  errors: Record<string, string>
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  isValid: boolean
  touchedFields: Record<string, true>
  values: Record<string, string>
}

export enum FormStates {
  DEFAULT = 'DEFAULT',
  DONE = 'DONE',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
}

export function useForm({
  initialValues,
  onSubmit,
  validateSchema,
}: UseFormOptions): UseFormReturn {
  const [values, setValues] = useState<Record<string, string>>(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touchedFields, setTouchedFields] = useState<Record<string, true>>({})

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(values)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name') || ''
    const { value } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value,
    }))
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name') || ''

    setTouchedFields((currentValues) => ({
      ...currentValues,
      [fieldName]: true,
    }))
  }

  useEffect(() => {
    let isStale = false

    validateSchema(values)
      .then(() => {
        if (isStale) return

        setErrors({})
      })
      .catch((error: { inner: { message: string; path: string }[] }) => {
        if (isStale) return

        const formattedErrors = error.inner.reduce<Record<string, string>>(
          (acc, currentError) => {
            const fieldName = currentError.path
            const errorMessage = currentError.message

            acc[fieldName] = errorMessage

            return acc
          },
          {},
        )

        setErrors(formattedErrors)
      })

    return () => {
      isStale = true
    }
  }, [validateSchema, values])

  const isValid =
    Object.keys(touchedFields).length > 0 && Object.keys(errors).length === 0

  return {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    touchedFields,
    values,
  }
}
