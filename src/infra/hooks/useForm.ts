import React, { useState } from 'react'

interface UseFormOptions {
  initialValues: Record<string, string>
  onSubmit: (values: Record<string, string>) => void
}

interface UseFormReturn {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  values: Record<string, string>
}

export function useForm({
  initialValues,
  onSubmit,
}: UseFormOptions): UseFormReturn {
  const [values, setValues] = useState<Record<string, string>>(initialValues)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(values)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name')
    const { value } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value,
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
  }
}
