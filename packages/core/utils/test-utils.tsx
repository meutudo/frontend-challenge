import React from 'react'
import { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ToastContainer } from 'react-toastify'

import { ThemeProvider } from 'styled-components'
import { theme } from '../assets'

import 'react-toastify/dist/ReactToastify.css'

import {
    AuthProvider,
    OpportunitiesProvider,
    SuggestionValuesProvider
} from '../contexts'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const customRender = (
    ui: ReactElement,
    { ...renderOptions }: CustomRenderProps = {}
) =>
    render(
        <MemoryRouter>
            <AuthProvider>
                <OpportunitiesProvider>
                    <SuggestionValuesProvider>
                        <ThemeProvider theme={theme}>{ui}</ThemeProvider>
                        <ToastContainer />
                    </SuggestionValuesProvider>
                </OpportunitiesProvider>
            </AuthProvider>
        </MemoryRouter>,
        renderOptions
    )

export * from '@testing-library/react'
export { customRender as render }
