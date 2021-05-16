import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SearchIcon } from './SearchIcon'

export default {
  component: SearchIcon,
  title: 'Icons/SearchIcon',
} as Meta

const Template: Story = (args) => <SearchIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
