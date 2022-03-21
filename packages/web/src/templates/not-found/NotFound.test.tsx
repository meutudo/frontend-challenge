import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'

import { NotFoundTemplate } from '.'

describe('<NotFound />', () => {
    it('should render component', () => {
        const { container } = render(<NotFoundTemplate />)

        expect(container).toBeInTheDocument()
    })
})
