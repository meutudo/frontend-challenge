import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InstallmentsTemplate, InstallmentsTemplateProps } from './'
import { useSuggestionInstallments } from '@meutudo/core/contexts'

export default {
    title: 'Templates/Installments',
    component: InstallmentsTemplate
} as ComponentMeta<typeof InstallmentsTemplate>

const Template: ComponentStory<typeof InstallmentsTemplate> = (
    args: InstallmentsTemplateProps
) => {
    const { setSuggestionInstallments } = useSuggestionInstallments()

    useEffect(() => {
        setSuggestionInstallments({
            min: 100,
            max: 10000,
            suggestionInstallments: [100, 500, 1000, 5000, 10000]
        })
    }, [setSuggestionInstallments])
    return <InstallmentsTemplate {...args} />
}

export const Default = Template.bind({})
Default.args = {}
