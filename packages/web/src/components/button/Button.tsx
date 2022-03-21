import React, { ButtonHTMLAttributes, LinkHTMLAttributes } from 'react'
import * as S from './Button.styles'

export type ButtonProps = {
    as?: React.ElementType
    to?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <S.Container {...props}>{children}</S.Container>
}
