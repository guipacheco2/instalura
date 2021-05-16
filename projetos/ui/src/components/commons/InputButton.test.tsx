import user from '@testing-library/user-event'
import React from 'react'
import { render, screen, waitFor } from '../../infra'
import { InputButton } from './InputButton'

describe('<InputButton />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      const onClick = jest.fn()
      render(<InputButton onClick={onClick} placeholder="Some placeholder" />)

      const inputEl = screen.getByPlaceholderText(/some placeholder/i)
      const typed = 'typed something'
      user.type(inputEl, typed)
      await waitFor(() => expect(inputEl).toHaveValue(typed))

      const buttonEl = screen.getByRole('button', {
        name: /confirm filled value/i,
      })

      user.click(buttonEl)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(typed)
    })
  })
})
