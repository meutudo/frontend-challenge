import React from 'react'

import * as S from './Simulation.styles'

import { AppBar } from '../../components/appbar'
import { Menu } from '../../components/menu'
import { Simuation } from '../../components/simuation'

export type SimulationTemplateProps = {}

export const SimulationTemplate: React.FC<SimulationTemplateProps> = () => {
    return (
        <S.Wrapper>
            <AppBar mini>Valores</AppBar>
            <main>
                <Simuation />
            </main>
            <Menu />
        </S.Wrapper>
    )
}
