import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonProps } from './'

export default {
    title: 'Components/Button',
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
    <Button {...args} />
)

export const Default = Template.bind({})
Default.args = {}
