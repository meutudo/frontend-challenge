import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'

import { SuggestionInstallments } from '.'

describe('<SuggestionInstallments />', () => {
    it('should render component', () => {
        const { container } = render(<SuggestionInstallments />)

        expect(container).toBeInTheDocument()
    })
})