import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'

import { ValuesTemplate } from '.'

describe('<Values />', () => {
    it('should render component', () => {
        const { container } = render(<ValuesTemplate />)

        expect(container).toBeInTheDocument()
    })
})
