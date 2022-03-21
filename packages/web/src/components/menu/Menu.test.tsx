import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'

import { Menu } from '.'

describe('<Menu />', () => {
    it('should render component', () => {
        const { container } = render(<Menu />)

        expect(container).toBeInTheDocument()
    })
})