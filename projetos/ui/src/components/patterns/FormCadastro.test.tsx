import user from '@testing-library/user-event'
import React from 'react'
import { FormStates, render, screen, waitFor } from '../../infra'
import { FormCadastro } from './FormCadastro'

describe('<FormCadastro />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      const onSubmit = jest.fn()
      render(
        <FormCadastro
          submissionStatus={FormStates.DEFAULT}
          onSubmit={onSubmit}
        />,
      )

      const buttonEl = screen.getByRole('button')
      expect(buttonEl).toBeDisabled()

      const inputNomeEl = screen.getByPlaceholderText('Nome')
      const typedName = 'somename'
      user.type(inputNomeEl, typedName)
      await waitFor(() => expect(inputNomeEl).toHaveValue(typedName))

      const inputUsernameEl = screen.getByPlaceholderText('Usuário')
      const typedUsername = 'someusername'
      user.type(inputUsernameEl, typedUsername)
      await waitFor(() => expect(inputUsernameEl).toHaveValue(typedUsername))

      expect(buttonEl).not.toBeDisabled()

      user.click(buttonEl)

      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onSubmit.mock.calls[0][0]).toEqual({
        name: typedName,
        username: typedUsername,
      })
    })
  })

  describe('when form fields are invalid', () => {
    beforeEach(() => {
      const onSubmit = jest.fn()

      render(
        <FormCadastro
          submissionStatus={FormStates.DEFAULT}
          onSubmit={onSubmit}
        />,
      )
    })

    test('displays the respective errors for Nome', async () => {
      const inputNomeEl = screen.getByPlaceholderText('Nome')
      inputNomeEl.focus()
      inputNomeEl.blur()

      await waitFor(() =>
        expect(screen.getByRole('alert')).toHaveTextContent(
          'Preencha ao menos 3 caracteres',
        ),
      )
    })

    test('displays the respective errors for Usuário', async () => {
      const inputUsernameEl = screen.getByPlaceholderText('Usuário')
      inputUsernameEl.focus()
      inputUsernameEl.blur()

      await waitFor(() =>
        expect(screen.getByRole('alert')).toHaveTextContent(
          'Preencha ao menos 3 caracteres',
        ),
      )
    })
  })
})
