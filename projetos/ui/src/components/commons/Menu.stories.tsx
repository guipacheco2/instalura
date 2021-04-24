import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Menu, MenuProps } from './Menu'

export default {
  component: Menu,
  title: 'Commons/Menu',
} as Meta

const Template: Story<MenuProps> = (args) => <Menu {...args} />

export const Primary = Template.bind({})
Primary.args = {}
