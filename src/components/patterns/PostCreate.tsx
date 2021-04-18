import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, ImageFilters, InputButton } from '../commons'
import { Box, Text } from '../foundation'
import { ImagePlaceholderIcon } from '../icons'

const StyledImageWrapper = styled.div`
  align-items: center;
  background: #d5d5d5;
  display: flex;
  height: 35;
  justify-content: center;
  overflow: hidden;
`

const StyledImage = styled.img`
  width: 100%;
`

interface PostCreateProps {
  onSubmit: (values: { filter: string; imageURL: string }) => void
}

export function PostCreate({ onSubmit }: PostCreateProps): JSX.Element {
  const [status, setStatus] = useState<'idle' | 'pending'>('idle')
  const [phase, setPhase] = useState<'initial' | 'filters'>('initial')
  const [imageURL, setImageURL] = useState('')
  const [filter, setFilter] = useState('none')

  function handleClickPost() {
    setStatus('pending')
    onSubmit({ filter, imageURL })
  }

  return (
    <div style={{ width: 350 }}>
      <StyledImageWrapper>
        {imageURL ? (
          <StyledImage src={imageURL} className={`filter-${filter}`} />
        ) : (
          <ImagePlaceholderIcon />
        )}
      </StyledImageWrapper>

      {phase === 'initial' && (
        <Box padding="24px">
          <Box padding="12px 0">
            <InputButton placeholder="URL da imagem" onClick={setImageURL} />

            <Text
              variant="smallestException"
              textAlign="center"
              as="p"
              color="tertiary.light"
            >
              Formatos suportados: jpg, png e svg.
            </Text>
          </Box>

          <Box padding="12px 0">
            <Button
              fullWidth
              variant="primary.main"
              onClick={() => setPhase('filters')}
              disabled={!imageURL}
            >
              Avançar
            </Button>
          </Box>
        </Box>
      )}

      {phase === 'filters' && (
        <Box padding="24px">
          <ImageFilters
            imageURL={imageURL}
            selected={filter}
            onChange={setFilter}
          />

          <Box padding="12px 0">
            <Button
              fullWidth
              variant="primary.main"
              onClick={handleClickPost}
              disabled={status === 'pending'}
            >
              Postar
            </Button>
          </Box>
        </Box>
      )}
    </div>
  )
}
