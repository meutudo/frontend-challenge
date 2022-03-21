import React from 'react'
import { render } from '@meutudo/core/utils/test-utils'

import { InstallmentsTemplate } from '.'

describe('<Values />', () => {
    it('should render component', () => {
        const { container } = render(<InstallmentsTemplate />)

        expect(container).toBeInTheDocument()
    })
})
