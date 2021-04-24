import { Meta, Story } from '@storybook/react'
import React from 'react'
import { NotFoundAnimation } from './NotFoundAnimation'

export default {
  component: NotFoundAnimation,
  title: 'Animations/NotFound',
} as Meta

const Template: Story = (args) => <NotFoundAnimation {...args} />

export const Primary = Template.bind({})
Primary.args = {}
