import React, { useRef } from 'react'
import styled, { css } from 'styled-components'

interface StyledModalProps {
  isOpen: boolean
}

const StyledModal = styled.div<StyledModalProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `
  }}
`

interface ModalProps extends StyledModalProps {
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps): JSX.Element {
  const innerElementRef = useRef<HTMLDivElement>(null)

  function handleClickOutsideInnerElement(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    if (!innerElementRef.current) throw new Error('Unable to use ref.')

    const isSafeArea = innerElementRef.current.contains(
      event.target as HTMLElement,
    )

    if (!isSafeArea) {
      onClose()
    }
  }

  return (
    <StyledModal isOpen={isOpen} onClick={handleClickOutsideInnerElement}>
      <div ref={innerElementRef}>{children}</div>
    </StyledModal>
  )
}
