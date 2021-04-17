import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Button, ImageFilters } from '../commons'
import { Box } from '../foundation'
import { ImagePlaceholderIcon } from '../icons'

const StyledImageWrapper = styled.div`
  align-items: center;
  background: #ccc;
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
  const [phase, setPhase] = useState<'initial' | 'filters'>('initial')
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [imageURL, setImageURL] = useState('')
  const [filter, setFilter] = useState('none')

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
            <input
              placeholder="URL da imagem"
              ref={imageInputRef}
              defaultValue="https://unavatar.now.sh/github/omariosouto"
            />

            <Button
              variant="secondary.main"
              onClick={() => setImageURL(imageInputRef.current.value)}
            >
              x
            </Button>
          </Box>

          <Box padding="12px 0">
            <Button
              fullWidth
              variant="primary.main"
              onClick={() => setPhase('filters')}
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
              onClick={() => onSubmit({ filter, imageURL })}
            >
              Postar
            </Button>
          </Box>
        </Box>
      )}
    </div>
  )
}
