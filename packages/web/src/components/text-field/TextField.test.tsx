import React from 'react'
import { render, screen, waitFor } from '@meutudo/core/utils/test-utils'
import userEvent from '@testing-library/user-event'

import { TextField } from '.'

describe('<TextField />', () => {
    it('should render component', () => {
        const { container } = render(<TextField />)

        expect(container).toBeInTheDocument()
    })

    it('should render with label', () => {
        render(<TextField label="Label" name="Label" />)

        expect(screen.getByLabelText('Label')).toBeInTheDocument()
    })

    it('should without label', () => {
        render(<TextField />)

        expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
    })

    it('should render with placeholder', () => {
        render(<TextField placeholder="Placeholder" />)

        expect(screen.getByPlaceholderText('Placeholder')).toBeInTheDocument()
    })

    it('should change its value when typing', async () => {
        const onInputChange = jest.fn()
        render(<TextField name="field" onInputChange={onInputChange} />)

        const input = screen.getByRole('textbox')
        const text = 'This is my text'

        userEvent.type(input, text)

        await waitFor(() => {
            expect(input).toHaveValue(text)
            expect(onInputChange).toHaveBeenCalledTimes(text.length)
        })

        expect(onInputChange).toHaveBeenCalledWith('field', text)
    })

    it('should does not changes its value when disabled', async () => {
        const onInputChange = jest.fn()
        render(<TextField onInputChange={onInputChange} disabled />)

        const input = screen.getByRole('textbox')
        expect(input).toBeDisabled()

        const text = 'This is my text'
        userEvent.type(input, text)

        await waitFor(() => {
            expect(input).not.toHaveValue(text)
            expect(onInputChange).toHaveBeenCalledTimes(0)
        })
        expect(onInputChange).not.toHaveBeenCalled()
    })

    it('should renders with error', () => {
        const { container } = render(<TextField error="Error message" />)

        expect(screen.getByText('Error message')).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
})
