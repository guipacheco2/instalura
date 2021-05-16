import user from '@testing-library/user-event'
import React from 'react'
import { render, screen, waitFor } from '../../infra'
import { PostCreate } from './PostCreate'

describe('<PostCreate />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      const onSubmit = jest.fn()
      render(<PostCreate onSubmit={onSubmit} />)

      const submitImageButtonEl = screen.getByRole('button', {
        name: /avançar/i,
      })
      expect(submitImageButtonEl).toBeDisabled()

      const inputDescriptionEl = screen.getByPlaceholderText(/descrição/i)
      const typedDescription = 'some description'
      user.type(inputDescriptionEl, typedDescription)
      await waitFor(() =>
        expect(inputDescriptionEl).toHaveValue(typedDescription),
      )

      const inputImageUrlEl = screen.getByPlaceholderText(/url da imagem/i)
      const typedImageUrl = 'some url'
      user.type(inputImageUrlEl, typedImageUrl)
      await waitFor(() => expect(inputImageUrlEl).toHaveValue(typedImageUrl))

      const confirmImageEl = screen.getByRole('button', {
        name: /confirm filled value/i,
      })
      user.click(confirmImageEl)

      const imageEl = screen.getByRole('img')
      expect(imageEl).toHaveAttribute('src', typedImageUrl)

      user.click(submitImageButtonEl)

      const submitPostButtonEl = screen.getByRole('button', { name: /postar/i })
      user.click(submitPostButtonEl)

      expect(onSubmit).toBeCalledTimes(1)
      expect(onSubmit).toBeCalledWith({
        description: typedDescription,
        filter: 'none',
        imageURL: typedImageUrl,
      })
    })
  })
})
