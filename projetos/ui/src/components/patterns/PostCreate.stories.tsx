import { Meta, Story } from '@storybook/react'
import React from 'react'
import { PostCreate, PostCreateProps } from './PostCreate'

export default {
  component: PostCreate,
  title: 'Patterns/PostCreate',
} as Meta

const Template: Story<PostCreateProps> = (args) => <PostCreate {...args} />

export const Initial = Template.bind({})
Initial.args = {
  initialDescription: 'Some initial description',
  initialImageURL: 'https://source.unsplash.com/5IKfw-BKapo/600x600',
}

export const Filters = Template.bind({})
Filters.args = {
  ...Initial.args,
  initialPhase: 'filters',
}
