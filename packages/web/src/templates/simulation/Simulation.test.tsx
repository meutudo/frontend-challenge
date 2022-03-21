import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'

import { SimulationTemplate } from '.'

describe('<Simulation />', () => {
    it('should render component', () => {
        const { container } = render(<SimulationTemplate />)

        expect(container).toBeInTheDocument()
    })
})
