import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HomeTemplate, HomeTemplateProps } from './'

export default {
    title: 'Templates/Home',
    component: HomeTemplate
} as ComponentMeta<typeof HomeTemplate>

const Template: ComponentStory<typeof HomeTemplate> = (
    args: HomeTemplateProps
) => <HomeTemplate {...args} />

export const Default = Template.bind({})
