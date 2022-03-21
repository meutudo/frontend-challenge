import { useOpportunities } from '@meutudo/core/contexts'
import { getOpportunities } from '@meutudo/core/services/get-opportunities'
import { HomeTemplate } from '../../templates/home'
import React, { useEffect } from 'react'

export const Home: React.FC = () => {
    const { setOpportunities } = useOpportunities()

    useEffect(() => {
        getOpportunities().then(opportunities =>
            setOpportunities(opportunities)
        )
    }, [setOpportunities])

    return <HomeTemplate />
}
