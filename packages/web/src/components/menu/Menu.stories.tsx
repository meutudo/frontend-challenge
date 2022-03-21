import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Menu, MenuProps } from './'

export default {
    title: 'Components/Menu',
    component: Menu
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args: MenuProps) => (
    <Menu {...args} />
)

export const Default = Template.bind({})
