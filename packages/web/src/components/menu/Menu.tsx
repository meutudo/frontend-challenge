import React from 'react'
import {
    IoHomeOutline,
    IoReceiptOutline,
    IoHelpCircleOutline
} from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as S from './Menu.styles'

export type MenuProps = {}

export const Menu: React.FC<MenuProps> = () => {
    return (
        <S.Container>
            <S.Item as={Link} to="/">
                <IoHomeOutline size={24} />
                <span>Início</span>
            </S.Item>
            <S.Item hightlight="true" as={Link} to="/">
                <IoReceiptOutline size={24} />
                <span>Contratos</span>
            </S.Item>
            <S.Item as={Link} to="/">
                <IoHelpCircleOutline size={24} />
                <span>Dúvidas</span>
            </S.Item>
            <S.Item as={Link} to="/">
                <FaRegUser size={24} />
                <span>Conta</span>
            </S.Item>
        </S.Container>
    )
}
