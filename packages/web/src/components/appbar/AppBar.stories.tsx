import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AppBar, AppBarProps } from './AppBar'

export default {
    title: 'Components/AppBar',
    component: AppBar
} as ComponentMeta<typeof AppBar>

const Template: ComponentStory<typeof AppBar> = (args: AppBarProps) => (
    <AppBar {...args}>AppBar Content</AppBar>
)

export const Full = Template.bind({})
export const Mini = Template.bind({})
Mini.args = { mini: true }
