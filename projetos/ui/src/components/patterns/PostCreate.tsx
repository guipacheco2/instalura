import {
  Box,
  Button,
  ImageFilters,
  ImagePlaceholderIcon,
  InputButton,
  Text,
  TextField,
  useForm,
} from '@instalura/ui'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'

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

const postSchema = yup.object().shape({
  description: yup
    .string()
    .required('"Descrição" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
})

export interface PostCreateProps {
  onSubmit: (values: {
    description: string
    filter: string
    imageURL: string
  }) => void
}

export function PostCreate({ onSubmit }: PostCreateProps): JSX.Element {
  const [status, setStatus] = useState<'idle' | 'pending'>('idle')
  const [phase, setPhase] = useState<'initial' | 'filters'>('initial')
  const [imageURL, setImageURL] = useState('')
  const [filter, setFilter] = useState('none')

  const form = useForm({
    initialValues: { description: '' },
    onSubmit: () => false,
    validateSchema: useCallback(async function validateSchema(values) {
      return postSchema.validate(values, {
        abortEarly: false,
      })
    }, []),
  })

  function handleClickPost() {
    setStatus('pending')
    onSubmit({ description: form.values.description, filter, imageURL })
  }

  return (
    <div style={{ width: 350 }} role="dialog" aria-label="create post dialog">
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
            <TextField
              placeholder="Descrição"
              name="description"
              value={form.values.description}
              error={form.errors.description}
              isTouched={form.touchedFields.description}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

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
              disabled={!form.isValid || !imageURL}
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
