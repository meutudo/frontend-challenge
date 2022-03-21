import React from 'react'

import * as S from './Values.styles'

import { AppBar } from '../../components/appbar'
import { Menu } from '../../components/menu'
import { SuggestionValues } from '../../components/suggestion-values'

export type ValuesTemplateProps = {}

export const ValuesTemplate: React.FC<ValuesTemplateProps> = () => {
    return (
        <S.Wrapper>
            <AppBar mini>Valores</AppBar>
            <main>
                <SuggestionValues />
            </main>
            <Menu />
        </S.Wrapper>
    )
}
