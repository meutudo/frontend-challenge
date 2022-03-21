import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputCurrency, InputCurrencyProps } from './'

export default {
    title: 'Components/Input Currency',
    component: InputCurrency
} as ComponentMeta<typeof InputCurrency>

const Template: ComponentStory<typeof InputCurrency> = (
    args: InputCurrencyProps
) => <InputCurrency {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Label = Template.bind({})
Label.args = { children: 'Label Input' }
