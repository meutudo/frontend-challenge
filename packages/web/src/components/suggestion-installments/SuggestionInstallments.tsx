import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDebounce } from '@meutudo/core/hooks/useDebounce'

import * as S from './SuggestionInstallments.styles'

import { Card } from '../card'
import { TextField } from '../text-field'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import { useSuggestionInstallments } from '@meutudo/core/contexts'

export type SuggestionInstallmentsProps = {}

export const SuggestionInstallments: React.FC<SuggestionInstallmentsProps> =
    () => {
        const [disabled, setDisabled] = useState(true)
        const [value, setValue] = useState('')

        const valueDebounce = useDebounce(value, 800)

        const {
            installmentsSelected,
            suggestionInstallments,
            setInstallmentsSelected,
            isCustomValue,
            setIsCustomValue
        } = useSuggestionInstallments()

        const handleValue = (value: number) => {
            setIsCustomValue(false)
            setValue('')
            setInstallmentsSelected(value)
        }

        useEffect(() => {
            if (valueDebounce) {
                const valueToFloat = Number(valueDebounce)
                setIsCustomValue(true)
                setInstallmentsSelected(null)

                if (
                    valueToFloat >= suggestionInstallments.min &&
                    valueToFloat <= suggestionInstallments.max
                ) {
                    setInstallmentsSelected(valueToFloat)
                } else {
                    toast(
                        `O valor deve estar no minimo de ${suggestionInstallments.min} meses e no máximo de ${suggestionInstallments.max} meses`,
                        {
                            type: 'warning'
                        }
                    )
                }
            }
        }, [
            setInstallmentsSelected,
            suggestionInstallments.max,
            suggestionInstallments.min,
            valueDebounce,
            setIsCustomValue
        ])

        useEffect(() => {
            if (isCustomValue && installmentsSelected !== null) {
                setValue(installmentsSelected.toString())
            }
        }, [isCustomValue, installmentsSelected])

        useEffect(() => {
            setDisabled(!installmentsSelected)
        }, [setDisabled, installmentsSelected])

        return (
            <S.Container>
                <div>
                    <S.Title>Em quanto tempo você quer pagar?</S.Title>
                    <S.List>
                        {suggestionInstallments.suggestionInstallments.map(
                            suggestion => (
                                <Card
                                    onClick={() => handleValue(suggestion)}
                                    radius={10}
                                    as="button"
                                    key={suggestion}
                                    selected={
                                        installmentsSelected === suggestion &&
                                        !isCustomValue
                                    }
                                >
                                    {suggestion} meses
                                </Card>
                            )
                        )}
                    </S.List>
                    <TextField
                        placeholder="00"
                        value={value}
                        onInputChange={(_, value) => setValue(value)}
                        label="meses"
                        type="number"
                    />
                </div>
                <S.Content>
                    <Button to="/simulation" as={Link} disabled={disabled}>
                        Continuar
                    </Button>
                </S.Content>
            </S.Container>
        )
    }
