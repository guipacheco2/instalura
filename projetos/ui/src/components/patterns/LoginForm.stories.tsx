import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LoginForm, LoginFormProps } from './LoginForm'

export default {
  component: LoginForm,
  title: 'Patterns/LoginForm',
} as Meta

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
