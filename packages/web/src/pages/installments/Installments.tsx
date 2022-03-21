import React, { useEffect } from 'react'

import { useSuggestionInstallments } from '@meutudo/core/contexts'
import { getInstallments } from '@meutudo/core/services/get-installments'
import { InstallmentsTemplate } from '../../templates/installments'

export const Installments: React.FC = () => {
    const { setSuggestionInstallments } = useSuggestionInstallments()

    useEffect(() => {
        getInstallments().then(installments =>
            setSuggestionInstallments(installments)
        )
    }, [setSuggestionInstallments])

    return <InstallmentsTemplate />
}
