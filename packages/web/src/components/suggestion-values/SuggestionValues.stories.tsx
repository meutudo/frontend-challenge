import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SuggestionValues, SuggestionValuesProps } from './'
import { useSuggestionValues } from '@meutudo/core/contexts'

export default {
    title: 'Forms/Suggestion Values',
    component: SuggestionValues
} as ComponentMeta<typeof SuggestionValues>

const Template: ComponentStory<typeof SuggestionValues> = (
    args: SuggestionValuesProps
) => {
    const { setSuggestionValues } = useSuggestionValues()

    useEffect(() => {
        setSuggestionValues({
            min: 100,
            max: 10000,
            suggestionValues: [100, 500, 1000, 5000, 10000]
        })
    }, [setSuggestionValues])

    return <SuggestionValues {...args} />
}

export const Default = Template.bind({})
Default.args = {}
