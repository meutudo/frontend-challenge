import React from 'react'

import * as S from './Home.styles'

import { Opportunities } from '../../components/opportunities'
import { AppBar } from '../../components/appbar'
import { Menu } from '../../components/menu'
import { About } from '../../components/about'

export type HomeTemplateProps = {}

export const HomeTemplate: React.FC<HomeTemplateProps> = () => {
    return (
        <S.Wrapper>
            <AppBar>
                <About />
            </AppBar>
            <main>
                <Opportunities />
            </main>
            <Menu />
        </S.Wrapper>
    )
}
