import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo, LogoProps } from './'

export default {
    title: 'Components/Logo',
    component: Logo
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args: LogoProps) => (
    <Logo {...args} />
)

export const Default = Template.bind({})
