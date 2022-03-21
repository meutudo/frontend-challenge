import React from 'react'
import ReactDOM from 'react-dom'
import { makeServer } from '@meutudo/server'
import App from './App'

if (process.env.NODE_ENV !== 'production') {
    makeServer({ environment: 'development' })
}

ReactDOM.render(<App />, document.getElementById('root'))
