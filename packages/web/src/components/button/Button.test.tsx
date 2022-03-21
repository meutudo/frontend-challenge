import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'

import { Button } from '.'

describe('<Button />', () => {
    it('should render component', () => {
        const { container } = render(<Button />)

        expect(container).toBeInTheDocument()
    })
})