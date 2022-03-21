import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import { Logo } from '../logo'
import { Notifications } from '../notifications'
import * as S from './AppBar.styles'

export type AppBarProps = {
    mini?: boolean
}

export const AppBar: React.FC<AppBarProps> = ({ children, mini = false }) => {
    const navigate = useNavigate()

    return (
        <S.Container mini={mini}>
            {Boolean(mini) && (
                <S.ButtonBack onClick={() => navigate(-1)}>
                    <IoIosArrowBack size={20} />
                </S.ButtonBack>
            )}
            {!mini && (
                <S.Topbar>
                    <Logo />
                    <Notifications />
                </S.Topbar>
            )}
            <S.Content>{children}</S.Content>
        </S.Container>
    )
}
