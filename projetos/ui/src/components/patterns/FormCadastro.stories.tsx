import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FormCadastro, FormCadastroProps } from './FormCadastro'

export default {
  component: FormCadastro,
  title: 'Patterns/FormCadastro',
} as Meta

const Template: Story<FormCadastroProps> = (args) => <FormCadastro {...args} />

export const Primary = Template.bind({})
Primary.args = {}
