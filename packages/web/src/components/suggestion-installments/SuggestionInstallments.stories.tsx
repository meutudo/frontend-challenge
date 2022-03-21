import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SuggestionInstallments, SuggestionInstallmentsProps } from './'
import { useSuggestionInstallments } from '@meutudo/core/contexts'

export default {
    title: 'Forms/Suggestion Installments',
    component: SuggestionInstallments
} as ComponentMeta<typeof SuggestionInstallments>

const Template: ComponentStory<typeof SuggestionInstallments> = (
    args: SuggestionInstallmentsProps
) => {
    const { setSuggestionInstallments } = useSuggestionInstallments()

    useEffect(() => {
        setSuggestionInstallments({
            min: 100,
            max: 10000,
            suggestionInstallments: [100, 500, 1000, 5000, 10000]
        })
    }, [setSuggestionInstallments])

    return <SuggestionInstallments {...args} />
}

export const Default = Template.bind({})
Default.args = {}
