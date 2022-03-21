import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Simuation, SimuationProps } from './'
import { useSimulation } from '@meutudo/core/contexts'

export default {
    title: 'Forms/Simuation',
    component: Simuation
} as ComponentMeta<typeof Simuation>

const Template: ComponentStory<typeof Simuation> = (args: SimuationProps) => {
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

    return <Simuation {...args} />
}

export const Default = Template.bind({})
Default.args = {}
