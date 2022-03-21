import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'

import { InputCurrency } from '.'

describe('<InputCurrency />', () => {
    it('should render component', () => {
        const { container } = render(<InputCurrency />)

        expect(container).toBeInTheDocument()
    })
})