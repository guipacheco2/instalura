import React, { useRef } from 'react'
import styled from 'styled-components'
import { ArrowRightIcon } from '../icons'
import { Button } from './Button'

const StyledWrapper = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  outline: 0;
  padding: 12px 56px 12px 16px;
  width: 100%;
`

const StyledButton = styled(Button)`
  padding: 10px;
  right: 0;
  position: absolute;
`

export interface InputButtonProps {
  onClick: (value: string) => void
  placeholder: string
}

export function InputButton({
  onClick,
  placeholder,
}: InputButtonProps): JSX.Element {
  const imageInputRef = useRef<HTMLInputElement>(null)

  return (
    <StyledWrapper>
      <StyledInput placeholder={placeholder} ref={imageInputRef} />

      <StyledButton
        variant="secondary.main"
        aria-label="confirm filled value"
        onClick={() => onClick(imageInputRef.current.value)}
        smallPadding
      >
        <ArrowRightIcon />
      </StyledButton>
    </StyledWrapper>
  )
}
