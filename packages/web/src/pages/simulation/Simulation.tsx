import React, { useEffect } from 'react'

import { useSimulation } from '@meutudo/core/contexts'
import { getSimulation } from '@meutudo/core/services/get-simulation'
import { SimulationTemplate } from '../../templates/simulation'

export const Simulation: React.FC = () => {
    const { setSimulation } = useSimulation()

    useEffect(() => {
        getSimulation().then(simulation => setSimulation(simulation))
    }, [setSimulation])

    return <SimulationTemplate />
}
