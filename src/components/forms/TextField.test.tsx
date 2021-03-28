/// <reference types="jest" />

import React from 'react'
import { render, screen } from '../../infra'
import { TextField } from './TextField'

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Ju"
        onChange={() => {
          console.log('input changed')
        }}
        name="nome"
      />,
    )

    const textField = screen.getByPlaceholderText(/nome/i)
    expect(textField).toMatchSnapshot()
  })
})
