import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InputButton, InputButtonProps } from './InputButton'

export default {
  component: InputButton,
  title: 'Commons/InputButton',
} as Meta

const Template: Story<InputButtonProps> = (args) => <InputButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'Type something',
}
