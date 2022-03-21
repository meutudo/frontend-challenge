import React, { createContext, useContext, useState } from 'react'
import { IOpportunities } from '../../services/get-opportunities'

export interface IOpportunitiesProps {
    opportunities: IOpportunities
    setOpportunities: (opportunities: IOpportunities) => void
}

const INIT_OPPORTUNITIES: IOpportunities = {
    creditCardMaxValue: 0,
    newLoanMaxValue: 0,
    portabilityMaxValue: 0,
    refinMaxValue: 0
}

const OpportunitiesContext = createContext<IOpportunitiesProps>(null)

export const OpportunitiesProvider = ({ children }) => {
    const [opportunities, setOpportunities] = useState(INIT_OPPORTUNITIES)

    return (
        <OpportunitiesContext.Provider
            value={{ opportunities, setOpportunities }}
        >
            {children}
        </OpportunitiesContext.Provider>
    )
}

export const useOpportunities = (): IOpportunitiesProps => {
    const context = useContext(OpportunitiesContext)
    if (!context) {
        throw new Error(
            'useOpportunities must be used within a OpportunitiesProvider'
        )
    }
    return context
}
