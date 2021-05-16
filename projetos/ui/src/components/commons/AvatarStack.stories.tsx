import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AvatarStack } from './AvatarStack'

export default {
  component: AvatarStack,
  title: 'Commons/AvatarStack',
} as Meta

const Template: Story = (args) => <AvatarStack {...args} />

export const Primary = Template.bind({})
Primary.args = {}
