import React from 'react'

import * as S from './Installments.styles'

import { AppBar } from '../../components/appbar'
import { Menu } from '../../components/menu'
import { SuggestionInstallments } from '../../components/suggestion-installments'

export type InstallmentsTemplateProps = {}

export const InstallmentsTemplate: React.FC<InstallmentsTemplateProps> = () => {
    return (
        <S.Wrapper>
            <AppBar mini>Período</AppBar>
            <main>
                <SuggestionInstallments />
            </main>
            <Menu />
        </S.Wrapper>
    )
}
