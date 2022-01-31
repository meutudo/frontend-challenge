import { FunctionComponent, StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './styles'

import { queryClient } from '@tudo/services/Query'
import { QueryClientProvider } from 'react-query'
import { AppProvider } from './contexts/App'
import { AppBarProvider } from './contexts/AppBar'

const Index: FunctionComponent = () => (
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <AppBarProvider>
            <App />
          </AppBarProvider>
        </AppProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)

ReactDOM.render(<Index />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
