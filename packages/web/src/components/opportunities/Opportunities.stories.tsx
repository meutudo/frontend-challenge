import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useOpportunities } from '@meutudo/core/contexts'
import { Opportunities, OpportunitiesProps } from './'

export default {
    title: 'Components/Opportunities',
    component: Opportunities
} as ComponentMeta<typeof Opportunities>

const Template: ComponentStory<typeof Opportunities> = (
    args: OpportunitiesProps
) => <Opportunities {...args} />

export const Cards = () => {
    const { setOpportunities } = useOpportunities()

    useEffect(
        () =>
            setOpportunities({
                newLoanMaxValue: 400000.0,
                portabilityMaxValue: 200.32,
                refinMaxValue: 300.32,
                creditCardMaxValue: 400.43
            }),
        [setOpportunities]
    )

    return <Opportunities />
}

export const CardsDisabled = Template.bind({})
