import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Button, ButtonProps } from './Button'

export default {
  component: Button,
  title: 'Commons/Button',
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const PrimaryMain = Template.bind({})
PrimaryMain.args = {
  children: 'Label',
  fullWidth: false,
  ghost: false,
  smallPadding: false,
  variant: 'primary.main',
}

export const PrimaryMainFullWidth = Template.bind({})
PrimaryMainFullWidth.args = {
  ...PrimaryMain.args,
  fullWidth: true,
}

export const PrimaryMainGhost = Template.bind({})
PrimaryMainGhost.args = {
  ...PrimaryMain.args,
  ghost: true,
}

export const PrimaryMainGhostFullWidth = Template.bind({})
PrimaryMainGhostFullWidth.args = {
  ...PrimaryMain.args,
  fullWidth: true,
  ghost: true,
}

export const PrimaryMainSmallPadding = Template.bind({})
PrimaryMainSmallPadding.args = {
  ...PrimaryMain.args,
  smallPadding: true,
}

export const PrimaryMainSmallPaddingFullWidth = Template.bind({})
PrimaryMainSmallPaddingFullWidth.args = {
  ...PrimaryMain.args,
  fullWidth: true,
  smallPadding: true,
}

export const PrimaryMainSmallPaddingGhost = Template.bind({})
PrimaryMainSmallPaddingGhost.args = {
  ...PrimaryMain.args,
  ghost: true,
  smallPadding: true,
}

export const PrimaryMainSmallPaddingGhostFullWidth = Template.bind({})
PrimaryMainSmallPaddingGhostFullWidth.args = {
  ...PrimaryMain.args,
  fullWidth: true,
  ghost: true,
  smallPadding: true,
}

export const SecondaryMain = Template.bind({})
SecondaryMain.args = {
  children: 'Label',
  variant: 'secondary.main',
}

export const TertiaryLight = Template.bind({})
TertiaryLight.args = {
  children: 'Label',
  variant: 'tertiary.light',
}
