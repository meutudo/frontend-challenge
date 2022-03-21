import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Notifications, NotificationsProps } from './'

export default {
    title: 'Components/Notifications',
    component: Notifications
} as ComponentMeta<typeof Notifications>

const Template: ComponentStory<typeof Notifications> = (
    args: NotificationsProps
) => <Notifications {...args} />

export const Default = Template.bind({})
