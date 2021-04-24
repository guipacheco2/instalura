import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ListItem, ListItemProps } from './ListItem'

export default {
  component: ListItem,
  title: 'Commons/ListItem',
} as Meta

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />

export const Small = Template.bind({})
Small.args = {
  avatarSize: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  avatarSize: 'medium',
}
