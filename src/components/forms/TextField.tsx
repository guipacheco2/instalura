import React from 'react'
import styled from 'styled-components'
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
` as React.ComponentType<TextPropsGeneric<'input'>>

interface TextFieldProps {
  placeholder: string
  name: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export function TextField({
  placeholder,
  name,
  onChange,
  value,
}: TextFieldProps): JSX.Element {
  return (
    <StyledTextField>
      <StyledInput
        as="input"
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        variant="paragraph1"
      />
    </StyledTextField>
  )
}
