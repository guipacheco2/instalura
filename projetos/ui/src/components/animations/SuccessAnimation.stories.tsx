import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SuccessAnimation } from './SuccessAnimation'

export default {
  component: SuccessAnimation,
  title: 'Animations/Success',
} as Meta

const Template: Story = (args) => <SuccessAnimation {...args} />

export const Primary = Template.bind({})
Primary.args = {}
