import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Text, TextProps } from './Text'

export default {
  component: Text,
  title: 'Foundation/Text',
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Paragraph1 = Template.bind({})
Paragraph1.args = {
  children: 'Some text',
  variant: 'paragraph1',
}

export const SmallestException = Template.bind({})
SmallestException.args = {
  children: 'Some text',
  variant: 'smallestException',
}

export const SubTitle = Template.bind({})
SubTitle.args = {
  children: 'Some text',
  variant: 'subTitle',
}

export const Title = Template.bind({})
Title.args = {
  children: 'Some text',
  variant: 'title',
}

export const TitleXs = Template.bind({})
TitleXs.args = {
  children: 'Some text',
  variant: 'titleXs',
}
