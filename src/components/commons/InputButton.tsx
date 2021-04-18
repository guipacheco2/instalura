import React, { useRef } from 'react'
import styled from 'styled-components'
import { ArrowRightIcon } from '../icons'
import { Button } from './Button'

const StyledWrapper = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  border: ${({ theme }) => `1px solid ${theme.colors.borders.main.color}`};
  color: ${({ theme }) => theme.colors.tertiary.main.color};
  outline: none;
  padding: 10px 50px 10px 10px;
  border-radius: 12px;
  width: 100%;
`

const StyledButton = styled(Button)`
  padding: 8px;
  right: 0;
  position: absolute;
`

interface InputButtonProps {
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
        onClick={() => onClick(imageInputRef.current.value)}
        smallPadding
      >
        <ArrowRightIcon />
      </StyledButton>
    </StyledWrapper>
  )
}
