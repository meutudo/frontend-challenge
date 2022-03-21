import React from 'react'
import LogoImg from '@meutudo/core/assets/images/logo-mini.png'
import { Link } from 'react-router-dom'
import * as S from './Logo.styles'

export type LogoProps = {
    src?: string
    title?: string
    as?: React.ElementType
}

export const Logo: React.FC<LogoProps> = ({
    src = LogoImg,
    title = 'Meu Tudo',
    ...props
}) => {
    return (
        <S.Container {...props}>
            <Link to="/">
                <img src={src} alt={title} />
            </Link>
        </S.Container>
    )
}
