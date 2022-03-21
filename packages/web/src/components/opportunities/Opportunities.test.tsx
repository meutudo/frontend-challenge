import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'
import { Opportunities } from './'

describe('<Opportunities />', () => {
    it('Should render Componennt', () => {
        const { container } = render(<Opportunities />)
        expect(container).toBeInTheDocument()
    })
})
