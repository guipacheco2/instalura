import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Avatar, AvatarProps } from './Avatar'

export default {
  component: Avatar,
  title: 'Commons/Avatar',
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  src: 'https://source.unsplash.com/TbEqd-GNC5w',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  src: 'https://source.unsplash.com/TbEqd-GNC5w',
}
