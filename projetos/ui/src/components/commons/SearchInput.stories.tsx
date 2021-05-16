import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SearchInput } from './SearchInput'

export default {
  component: SearchInput,
  title: 'Commons/SearchInput',
} as Meta

const Template: Story = (args) => <SearchInput {...args} />

export const Primary = Template.bind({})
Primary.args = {}
