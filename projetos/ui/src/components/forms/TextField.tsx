import React from 'react'
import styled, { css } from 'styled-components'
import { Text, TextPropsGeneric } from '../foundation'

const StyledTextField = styled.div`
  margin-bottom: 17px;
`

const StyledInput = styled(Text)`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  outline: 0;
  padding: 12px 16px;
  width: 100%;

  ${({ isFieldInvalid, theme }) =>
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

export interface TextFieldProps {
  error?: string
  isTouched?: boolean
  name: HTMLInputElement['name']
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: HTMLInputElement['placeholder']
  type?: HTMLInputElement['type']
  value?: HTMLInputElement['value']
}

export function TextField({
  error = '',
  isTouched = false,
  name,
  onBlur,
  onChange,
  placeholder,
  type = 'text',
  value,
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
