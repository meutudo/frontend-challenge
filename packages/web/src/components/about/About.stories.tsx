import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { About, AboutProps } from './'

export default {
    title: 'Components/About',
    component: About
} as ComponentMeta<typeof About>

const Template: ComponentStory<typeof About> = (args: AboutProps) => (
    <About {...args} />
)

export const Default = Template.bind({})
Default.args = {}
