import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NotFoundTemplate, NotFoundTemplateProps } from './'

export default {
    title: 'Templates/Not Found 404',
    component: NotFoundTemplate
} as ComponentMeta<typeof NotFoundTemplate>

const Template: ComponentStory<typeof NotFoundTemplate> = (
    args: NotFoundTemplateProps
) => <NotFoundTemplate {...args} />

export const Default = Template.bind({})
Default.args = {}
