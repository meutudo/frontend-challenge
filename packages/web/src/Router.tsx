import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, Values, Installments, Simulation, NotFound } from './pages'

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/values" element={<Values />} />
            <Route path="/installments" element={<Installments />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router
