import { Meta, Story } from '@storybook/react'
import React from 'react'
import { GithubIcon } from './GithubIcon'

export default {
  component: GithubIcon,
  title: 'Icons/GithubIcon',
} as Meta

const Template: Story = (args) => <GithubIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
