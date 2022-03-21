import React, { useState, InputHTMLAttributes } from 'react'

import * as S from './TextField.styles'

export type TextFieldProps = {
    onInputChange?: (name: string, value: string) => void
    label?: string
    initialValue?: string
    disabled?: boolean
    error?: string
    value?: any
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
    label,
    name,
    onInputChange,
    initialValue = '',
    disabled = false,
    error,
    ...props
}: TextFieldProps) => {
    const [currentValue, setCurrentValue] = useState(initialValue)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = event.currentTarget.value
        const currentName = event.currentTarget.name

        setCurrentValue(currentValue)

        !!onInputChange && onInputChange(currentName, currentValue)
    }

    return (
        <S.Wrapper disabled={disabled} error={!!error}>
            <S.InputWrapper>
                <S.Input
                    onChange={handleChange}
                    value={currentValue}
                    name={name}
                    disabled={disabled}
                    {...(label ? { id: name } : {})}
                    {...props}
                />
            </S.InputWrapper>
            {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
            {!!error && <S.Error>{error}</S.Error>}
        </S.Wrapper>
    )
}
