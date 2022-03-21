import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { theme, GlobalStyles } from '@meutudo/core/assets'
import 'react-toastify/dist/ReactToastify.css'

import {
    OpportunitiesProvider,
    SuggestionValuesProvider,
    SuggestionInstallmentsProvider,
    SimulationProvider,
    AuthProvider
} from '@meutudo/core/contexts'

export const decorators = [
    Story => (
        <MemoryRouter>
            <AuthProvider>
                <OpportunitiesProvider>
                    <SuggestionValuesProvider>
                        <SuggestionInstallmentsProvider>
                            <SimulationProvider>
                                <ThemeProvider theme={theme}>
                                    <GlobalStyles />
                                    <Story />
                                    <ToastContainer />
                                </ThemeProvider>
                            </SimulationProvider>
                        </SuggestionInstallmentsProvider>
                    </SuggestionValuesProvider>
                </OpportunitiesProvider>
            </AuthProvider>
        </MemoryRouter>
    )
]
