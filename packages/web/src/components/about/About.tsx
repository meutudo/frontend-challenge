import { useAuth } from '@meutudo/core/contexts'
import { currency } from '@meutudo/core/helpers'
import React, { useState } from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import * as S from './About.styles'

export type AboutProps = {}

export const About: React.FC<AboutProps> = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useAuth()

    return (
        <S.Container isOpen={isOpen}>
            <S.Content>
                <S.Welcome>Olá, {user.name}</S.Welcome>
                <div>
                    <S.Text>Seu crédito disponível é de</S.Text>
                    <S.Price>{currency(user.creditValue)}</S.Price>
                </div>
            </S.Content>
            <S.Button onClick={() => setIsOpen(oldIsOpen => !oldIsOpen)}>
                <IoIosArrowDown size={20} />
            </S.Button>
        </S.Container>
    )
}
