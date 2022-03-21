import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { currencyToFloat } from '@meutudo/core/helpers/currency-to-float'
import { useDebounce } from '@meutudo/core/hooks/useDebounce'

import * as S from './SuggestionValues.styles'

import { Card } from '../card'
import { InputCurrency } from '../input-currency'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import { useSuggestionValues } from '@meutudo/core/contexts'
import { currency } from '@meutudo/core/helpers'

export type SuggestionValuesProps = {}

export const SuggestionValues: React.FC<SuggestionValuesProps> = () => {
    const [disabled, setDisabled] = useState(true)
    const [value, setValue] = useState(null)

    const valueDebounce = useDebounce(value, 800)

    const {
        suggestionSelected,
        suggestionValues,
        setSuggestionSelected,
        isCustomValue,
        setIsCustomValue
    } = useSuggestionValues()

    const handleValue = (value: number) => {
        setIsCustomValue(false)
        setValue(null)
        setSuggestionSelected(value)
    }

    useEffect(() => {
        if (valueDebounce) {
            const valueToFloat = currencyToFloat(valueDebounce)
            setIsCustomValue(true)
            setSuggestionSelected(null)

            if (
                valueToFloat >= suggestionValues.min &&
                valueToFloat <= suggestionValues.max
            ) {
                setSuggestionSelected(valueToFloat)
            } else {
                toast(
                    `O valor deve estar no minimo de ${currency(
                        suggestionValues.min
                    )} e no máximo de ${currency(suggestionValues.max)}`,
                    {
                        type: 'warning'
                    }
                )
            }
        }
    }, [
        setSuggestionSelected,
        suggestionValues.max,
        suggestionValues.min,
        valueDebounce,
        setIsCustomValue
    ])

    useEffect(() => {
        if (isCustomValue) {
            setValue(currency(suggestionSelected))
        }
    }, [isCustomValue, suggestionSelected])

    useEffect(() => {
        setDisabled(!suggestionSelected)
    }, [setDisabled, suggestionSelected])

    return (
        <S.Container>
            <div>
                <S.Title>De quanto você precisa?</S.Title>
                <S.List>
                    {suggestionValues.suggestionValues.map(suggestion => (
                        <Card
                            onClick={() => handleValue(suggestion)}
                            radius={10}
                            as="button"
                            key={suggestion}
                            selected={
                                suggestionSelected === suggestion &&
                                !isCustomValue
                            }
                        >
                            {currency(suggestion)}
                        </Card>
                    ))}
                </S.List>
                <InputCurrency
                    value={value}
                    onChange={event => setValue(event.target.value)}
                >
                    Outro valor
                </InputCurrency>
            </div>
            <S.Content>
                <Button to="/installments" as={Link} disabled={disabled}>
                    Continuar
                </Button>
            </S.Content>
            <S.Link as={Link} to="/simulate-payment">
                Simule pela parcela
            </S.Link>
        </S.Container>
    )
}
