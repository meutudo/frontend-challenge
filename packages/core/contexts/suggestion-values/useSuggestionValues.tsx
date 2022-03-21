import React, { createContext, useContext, useState } from 'react'
import { ISuggestedValues } from '../../services/get-suggested-values'

export interface ISuggestionValuesProps {
    suggestionValues: ISuggestedValues
    setSuggestionValues: (opportunities: ISuggestedValues) => void
    isCustomValue: boolean
    setIsCustomValue: (isCustomValue: boolean) => void
    suggestionSelected: number | null
    setSuggestionSelected(value: number | null): void
}

const INIT_OPPORTUNITIES: ISuggestedValues = {
    max: 0,
    min: 0,
    suggestionValues: []
}

const SuggestionValuesContext = createContext<ISuggestionValuesProps>(null)

export const SuggestionValuesProvider = ({ children }) => {
    const [suggestionValues, setSuggestionValues] = useState(INIT_OPPORTUNITIES)
    const [suggestionSelected, setSuggestionSelected] = useState(null)
    const [isCustomValue, setIsCustomValue] = useState(false)

    return (
        <SuggestionValuesContext.Provider
            value={{
                suggestionValues,
                setSuggestionValues,
                suggestionSelected,
                setSuggestionSelected,
                isCustomValue,
                setIsCustomValue
            }}
        >
            {children}
        </SuggestionValuesContext.Provider>
    )
}

export const useSuggestionValues = (): ISuggestionValuesProps => {
    const context = useContext(SuggestionValuesContext)
    if (!context) {
        throw new Error(
            'useSuggestionValues must be used within a SuggestionValuesProvider'
        )
    }
    return context
}
