/// <reference types="jest" />

import user from '@testing-library/user-event'
import React from 'react'
import { render, screen } from '../../infra'
import { TextField } from './TextField'

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Ju"
        onChange={() => false}
        name="nome"
      />,
    )

    const textField = screen.getByPlaceholderText(/nome/i)
    expect(textField).toMatchSnapshot()
  })

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn()

        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            isTouched
          />,
        )

        const inputNome = screen.getByPlaceholderText(/nome/i)
        const typedName = 'someusername'
        user.type(inputNome, typedName)
        expect(onChangeMock).toHaveBeenCalledTimes(typedName.length)
      })
    })
  })

  describe('when field is invalid', () => {
    test('displays the respective error message', () => {
      const typedName = 'someusername'

      render(
        <TextField
          placeholder="Email"
          value={typedName}
          onChange={() => false}
          name="email"
          isTouched
          error="O campo email é obrigatório"
        />,
      )

      const inputEmail = screen.getByPlaceholderText(/email/i)
      expect(inputEmail).toHaveValue(typedName)
      expect(screen.getByRole('alert')).toHaveTextContent(
        'O campo email é obrigatório',
      )
      expect(inputEmail).toMatchSnapshot()
    })
  })
})
