import React from 'react'
import styled, { css } from 'styled-components'
import { Text, TextPropsGeneric } from '../foundation'

const StyledTextField = styled.div`
  margin-bottom: 17px;
`

const StyledInput = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ theme, isFieldInvalid }) =>
    isFieldInvalid &&
    css`
      border-color: ${theme.colors.error.main.color};
      & + span {
        color: ${theme.colors.error.main.color};
        font-size: 11px;
      }
    `}
` as React.ComponentType<
  TextPropsGeneric<'input'> & { isFieldInvalid: boolean }
>

interface TextFieldProps {
  placeholder: HTMLInputElement['placeholder']
  name: HTMLInputElement['name']
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: HTMLInputElement['type']
  value?: HTMLInputElement['value']
  error?: string
  isTouched?: boolean
}

export function TextField({
  placeholder,
  name,
  onBlur,
  onChange,
  value,
  type = 'text',
  error = '',
  isTouched = false,
}: TextFieldProps): JSX.Element {
  const hasError = Boolean(error)
  const isFieldInvalid = hasError && isTouched

  return (
    <StyledTextField>
      <StyledInput
        as="input"
        placeholder={placeholder}
        name={name}
        type={type}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        variant="paragraph1"
        isFieldInvalid={isFieldInvalid}
      />

      {isFieldInvalid && (
        <Text variant="smallestException" color="error.main" role="alert">
          {error}
        </Text>
      )}
    </StyledTextField>
  )
}
