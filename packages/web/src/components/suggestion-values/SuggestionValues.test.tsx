import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'

import { SuggestionValues } from '.'

describe('<SuggestionValues />', () => {
    it('should render component', () => {
        const { container } = render(<SuggestionValues />)

        expect(container).toBeInTheDocument()
    })
})