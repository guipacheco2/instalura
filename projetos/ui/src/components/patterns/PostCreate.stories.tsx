import { Meta, Story } from '@storybook/react'
import React from 'react'
import { PostCreate, PostCreateProps } from './PostCreate'

export default {
  component: PostCreate,
  title: 'Patterns/PostCreate',
} as Meta

const Template: Story<PostCreateProps> = (args) => <PostCreate {...args} />

export const Primary = Template.bind({})
Primary.args = {}
