/* eslint-disable @typescript-eslint/ban-ts-comment */
import user from '@testing-library/user-event'
import React from 'react'
import { render, screen, waitFor } from '../../infra'
import { LoginForm } from './LoginForm'

describe('<LoginForm />', () => {
  describe('when from fields are valid', () => {
    test('complete the submission', async () => {
      const onSubmit = jest.fn()
      render(<LoginForm onSubmit={onSubmit} />)

      const buttonEl = screen.getByRole('button')
      // @ts-ignore
      expect(buttonEl).toBeDisabled()

      const inputUsuarioEl = screen.getByPlaceholderText('Usuário')
      const typedUsername = 'someusername'
      user.type(inputUsuarioEl, typedUsername)
      // @ts-ignore
      await waitFor(() => expect(inputUsuarioEl).toHaveValue(typedUsername))

      const inputSenhaEl = screen.getByPlaceholderText('Senha')
      const typedPassword = 'somepassword'
      user.type(inputSenhaEl, typedPassword)
      // @ts-ignore
      await waitFor(() => expect(inputSenhaEl).toHaveValue(typedPassword))

      // @ts-ignore
      expect(buttonEl).not.toBeDisabled()

      user.click(buttonEl)

      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onSubmit.mock.calls[0][0]).toEqual({
        senha: typedPassword,
        usuario: typedUsername,
      })
    })
  })

  describe('when form fields are invalid', () => {
    test('displays the respective errors', async () => {
      const onSubmit = jest.fn()
      render(<LoginForm onSubmit={onSubmit} />)

      const inputUsuarioEl = screen.getByPlaceholderText('Usuário')
      inputUsuarioEl.focus()
      inputUsuarioEl.blur()

      await waitFor(() =>
        // @ts-ignore
        expect(screen.getByRole('alert')).toHaveTextContent(
          'Preencha ao menos 3 caracteres',
        ),
      )
    })
  })
})
