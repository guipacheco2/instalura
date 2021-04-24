import { Meta, Story } from '@storybook/react'
import React from 'react'
import { TextField, TextFieldProps } from './TextField'

export default {
  component: TextField,
  title: 'Forms/TextField',
} as Meta

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: '',
  isTouched: false,
  name: 'inputName',
  placeholder: 'Some placeholder',
}

export const Error = Template.bind({})
Error.args = {
  ...Primary.args,
  error: 'Some error message',
  isTouched: true,
}
