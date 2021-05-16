import { Meta, Story } from '@storybook/react'
import React from 'react'
import { HomeIcon } from './HomeIcon'

export default {
  component: HomeIcon,
  title: 'Icons/HomeIcon',
} as Meta

const Template: Story = (args) => <HomeIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
