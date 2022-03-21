import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SimulationTemplate, SimulationTemplateProps } from './'
import { useSimulation } from '@meutudo/core/contexts'

export default {
    title: 'Templates/Simulation',
    component: SimulationTemplate
} as ComponentMeta<typeof SimulationTemplate>

const Template: ComponentStory<typeof SimulationTemplate> = (
    args: SimulationTemplateProps
) => {
    const { setSimulation } = useSimulation()

    useEffect(() => {
        setSimulation({
            contractValue: 2345.89,
            numberOfInstallments: 84,
            installmentValue: 41.23,
            rate: 0.0139,
            nearEstimatedDate: '19/05/2022',
            fatEstimatedDate: '01/06/2022'
        })
    }, [setSimulation])

    return <SimulationTemplate {...args} />
}

export const Default = Template.bind({})
Default.args = {}
