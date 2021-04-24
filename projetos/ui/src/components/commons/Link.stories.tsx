import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Link, LinkProps } from './Link'

export default {
  component: Link,
  title: 'Commons/Link',
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Some target',
  href: '#',
}
