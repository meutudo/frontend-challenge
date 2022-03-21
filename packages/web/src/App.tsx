import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import {
    SuggestionValuesProvider,
    OpportunitiesProvider,
    SuggestionInstallmentsProvider,
    SimulationProvider,
    AuthProvider
} from '@meutudo/core/contexts'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Router from './Router'
import { theme, GlobalStyles } from '@meutudo/core/assets'

const App: React.FC = () => {
    return (
        <AuthProvider>
            <OpportunitiesProvider>
                <SuggestionValuesProvider>
                    <SuggestionInstallmentsProvider>
                        <SimulationProvider>
                            <ThemeProvider theme={theme}>
                                <GlobalStyles />
                                <BrowserRouter>
                                    <Router />
                                </BrowserRouter>
                                <ToastContainer />
                            </ThemeProvider>
                        </SimulationProvider>
                    </SuggestionInstallmentsProvider>
                </SuggestionValuesProvider>
            </OpportunitiesProvider>
        </AuthProvider>
    )
}

export default App
