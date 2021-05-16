import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MessageIcon } from './MessageIcon'

export default {
  component: MessageIcon,
  title: 'Icons/MessageIcon',
} as Meta

const Template: Story = (args) => <MessageIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
