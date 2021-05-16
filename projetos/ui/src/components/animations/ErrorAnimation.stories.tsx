import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ErrorAnimation } from './ErrorAnimation'

export default {
  component: ErrorAnimation,
  title: 'Animations/Error',
} as Meta

const Template: Story = (args) => <ErrorAnimation {...args} />

export const Primary = Template.bind({})
Primary.args = {}
