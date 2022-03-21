import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'

import { Simuation } from '.'

describe('<Simuation />', () => {
    it('should render component', () => {
        const { container } = render(<Simuation />)

        expect(container).toBeInTheDocument()
    })
})