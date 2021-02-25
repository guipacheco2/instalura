import { motion } from 'framer-motion'
import React from 'react'
import styled, { css } from 'styled-components'

interface StyledModalProps {
  isOpen: boolean
}

const StyledModal = styled.div<StyledModalProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: 0.3s;
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
  function handleClickOutsideInnerElement(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    const isSafeArea = event.currentTarget !== event.target

    if (!isSafeArea) {
      onClose()
    }
  }

  return (
    <StyledModal isOpen={isOpen}>
      <motion.div
        onClick={handleClickOutsideInnerElement}
        variants={{ open: { x: 0 }, closed: { x: '-100%' } }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', flex: 1 }}
      >
        {children}
      </motion.div>
    </StyledModal>
  )
}
