import React, { createContext, useContext, useState } from 'react'
import { IInstallments } from '../../services/get-installments'

export interface ISuggestionInstallmentsProps {
    suggestionInstallments: IInstallments
    setSuggestionInstallments: (installments: IInstallments) => void
    isCustomValue: boolean
    setIsCustomValue: (isCustomValue: boolean) => void
    installmentsSelected: number | null
    setInstallmentsSelected(value: number | null): void
}

const INIT_INSTALLMENTS: IInstallments = {
    max: 0,
    min: 0,
    suggestionInstallments: []
}

const SuggestionInstallmentsContext =
    createContext<ISuggestionInstallmentsProps>(null)

export const SuggestionInstallmentsProvider = ({ children }) => {
    const [suggestionInstallments, setSuggestionInstallments] =
        useState(INIT_INSTALLMENTS)
    const [installmentsSelected, setInstallmentsSelected] = useState(null)
    const [isCustomValue, setIsCustomValue] = useState(false)

    return (
        <SuggestionInstallmentsContext.Provider
            value={{
                suggestionInstallments,
                setSuggestionInstallments,
                installmentsSelected,
                setInstallmentsSelected,
                isCustomValue,
                setIsCustomValue
            }}
        >
            {children}
        </SuggestionInstallmentsContext.Provider>
    )
}

export const useSuggestionInstallments = (): ISuggestionInstallmentsProps => {
    const context = useContext(SuggestionInstallmentsContext)
    if (!context) {
        throw new Error(
            'useSuggestionInstallments must be used within a SuggestionInstallmentsProvider'
        )
    }
    return context
}
