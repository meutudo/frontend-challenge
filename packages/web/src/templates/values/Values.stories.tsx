import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ValuesTemplate, ValuesTemplateProps } from './'
import { useSuggestionValues } from '@meutudo/core/contexts'

export default {
    title: 'Templates/Values',
    component: ValuesTemplate
} as ComponentMeta<typeof ValuesTemplate>

const Template: ComponentStory<typeof ValuesTemplate> = (
    args: ValuesTemplateProps
) => {
    const { setSuggestionValues } = useSuggestionValues()

    useEffect(() => {
        setSuggestionValues({
            min: 100,
            max: 10000,
            suggestionValues: [100, 500, 1000, 5000, 10000]
        })
    }, [setSuggestionValues])
    return <ValuesTemplate {...args} />
}

export const Default = Template.bind({})
Default.args = {}
