import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Logo, LogoProps } from './Logo'

export default {
  component: Logo,
  title: 'Commons/Logo',
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Small = Template.bind({})
Small.args = {
  avatarSize: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  avatarSize: 'medium',
}
