import React, { useEffect } from 'react'

import { useSuggestionValues } from '@meutudo/core/contexts'
import { getSuggestedValues } from '@meutudo/core/services/get-suggested-values'
import { ValuesTemplate } from '../../templates/values'

export const Values: React.FC = () => {
    const { setSuggestionValues } = useSuggestionValues()

    useEffect(() => {
        getSuggestedValues().then(sugestionValues =>
            setSuggestionValues(sugestionValues)
        )
    }, [setSuggestionValues])

    return <ValuesTemplate />
}
