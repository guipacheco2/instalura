import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AppHeader } from './AppHeader'

export default {
  component: AppHeader,
  title: 'Commons/AppHeader',
} as Meta

const Template: Story = (args) => <AppHeader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Header content',
}
