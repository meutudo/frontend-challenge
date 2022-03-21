import React, { createContext, useContext, useState } from 'react'
import { ISimulation } from '../../services/get-simulation'

export interface ISimulationProps {
    simulation: ISimulation
    setSimulation: (simulation: ISimulation) => void
}

const INIT_OPPORTUNITIES: ISimulation = {
    contractValue: 0,
    installmentValue: 0,
    numberOfInstallments: 0,
    rate: 0,
    fatEstimatedDate: '00/00/0000',
    nearEstimatedDate: '00/00/0000'
}

const SimulationContext = createContext<ISimulationProps>(null)

export const SimulationProvider = ({ children }) => {
    const [simulation, setSimulation] = useState(INIT_OPPORTUNITIES)

    return (
        <SimulationContext.Provider
            value={{
                simulation,
                setSimulation
            }}
        >
            {children}
        </SimulationContext.Provider>
    )
}

export const useSimulation = (): ISimulationProps => {
    const context = useContext(SimulationContext)
    if (!context) {
        throw new Error(
            'useSimulation must be used within a SimulationProvider'
        )
    }
    return context
}
