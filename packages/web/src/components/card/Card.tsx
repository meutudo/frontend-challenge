import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { LinkProps } from 'react-router-dom'

import * as S from './Card.styles'

type ButtonTypes =
    | AnchorHTMLAttributes<HTMLAnchorElement>
    | ButtonHTMLAttributes<HTMLButtonElement>
    | LinkProps

export type CardProps = ButtonTypes & {
    disabled?: boolean
    as?: React.ElementType
    radius?: number
    selected?: boolean
    leftLight?: boolean
}

export const Card: React.FC<CardProps> = ({
    children,
    disabled = false,
    radius = 20,
    selected = false,
    ...props
}) => {
    return (
        <S.Container
            selected={selected}
            disabled={disabled}
            radius={radius}
            {...props}
        >
            {children}
        </S.Container>
    )
}
