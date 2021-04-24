import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { Box, GridCol, GridRow } from '../foundation'
import { CloseIcon } from '../icons'
import { IconButton } from './IconButton'

interface StyledModalProps {
  isOpen: boolean
}

const StyledModal = styled.div<StyledModalProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
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
  children: React.ReactNode
  onClose: () => void
  position?: 'center' | 'right'
}

const StyledLockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

type UseModalOpenHandler = () => void
type UseModalCloseHandler = () => void

export function useModal(
  initialIsOpen = false,
): [boolean, UseModalOpenHandler, UseModalCloseHandler] {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen)

  return [isOpen, () => setIsOpen(true), () => setIsOpen(false)]
}

export function Modal({
  children,
  isOpen,
  onClose,
  position = 'right',
}: ModalProps): JSX.Element {
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
    <StyledModal isOpen={isOpen}>
      {isOpen && <StyledLockScroll />}
      <motion.div
        onClick={handleClickOutsideInnerElement}
        variants={{ closed: { x: '100%' }, open: { x: 0 } }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', flex: 1 }}
      >
        <GridRow
          marginLeft={0}
          marginRight={0}
          flex={1}
          justifyContent={position === 'center' ? 'center' : 'flex-end'}
          flexDirection={position === 'center' ? 'column' : 'row'}
          alignItems={position === 'center' ? 'center' : 'stretch'}
        >
          <GridCol
            display="flex"
            paddingRight={0}
            flex={1}
            size={{ lg: 4, md: 5, xs: 12 }}
            ref={innerElementRef}
          >
            <Box
              boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
              display="flex"
              flexDirection="column"
              flex={1}
              backgroundColor="background"
              borderRadius={position === 'center'}
            >
              <Box display="flex" justifyContent="flex-end" padding="26px">
                <IconButton onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                flex={1}
              >
                {isOpen && children}
              </Box>
            </Box>
          </GridCol>
        </GridRow>
      </motion.div>
    </StyledModal>
  )
}
