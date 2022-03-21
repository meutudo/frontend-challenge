import React from 'react'

import * as S from './NotFound.styles'

import { AppBar } from '../../components/appbar'
import { Menu } from '../../components/menu'

export type NotFoundTemplateProps = {}

export const NotFoundTemplate: React.FC<NotFoundTemplateProps> = () => {
    return (
        <S.Wrapper>
            <AppBar mini>404 - Not Found</AppBar>
            <main>
                <S.Title>Ops! 404 Not Found!!!</S.Title>
            </main>
            <Menu />
        </S.Wrapper>
    )
}
