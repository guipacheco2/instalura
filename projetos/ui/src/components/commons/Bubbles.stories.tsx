import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Bubbles } from './Bubbles'

export default {
  component: Bubbles,
  title: 'Commons/Bubbles',
} as Meta

const Template: Story = (args) => <Bubbles {...args} />

export const Primary = Template.bind({})
Primary.args = {}
