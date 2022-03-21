import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'

import { About } from '.'

describe('<About />', () => {
    it('should render component', () => {
        const { container } = render(<About />)

        expect(container).toBeInTheDocument()
    })
})