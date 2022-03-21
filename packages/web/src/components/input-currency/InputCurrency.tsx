import React, { InputHTMLAttributes } from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import styled, { css } from 'styled-components'

import * as S from './InputCurrency.styles'

const InputCurrencyMask = styled(MaskedInput)`
    ${({ theme }) => css`
        background: none;
        border: 0;
        border-bottom: 1px solid ${theme.colors.gray};
        padding: 6px;
        font-size: ${theme.font.sizes.medium};
        font-weight: 400;
        text-align: center;

        &:focus {
            outline: none;
            border-bottom-color: ${theme.brand.primary};
        }
    `}
`

const defaultMaskOptions = {
    prefix: 'R$ ',
    sufix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: false,
    allowLeadingZeroes: false
}

export type InputCurrencyProps = {
    inputmode?: string
    maskOptions?: {
        prefix?: string
        sufix?: string
        includeThousandsSeparator?: boolean
        thousandsSeparatorSymbol?: string
        allowDecimal?: boolean
        decimalSymbol?: string
        decimalLimit?: number
        integerLimit?: number
        allowNegative?: boolean
        allowLeadingZeroes?: boolean
    }
} & InputHTMLAttributes<HTMLInputElement>

export const InputCurrency: React.FC<InputCurrencyProps> = ({
    children,
    maskOptions,
    ...inputProps
}) => {
    const currencyMask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions
    })

    return (
        <S.Container>
            {children && <span>{children}</span>}
            <InputCurrencyMask mask={currencyMask} {...inputProps} />
        </S.Container>
    )
}
