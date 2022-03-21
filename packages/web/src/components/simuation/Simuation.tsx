import React, { useEffect, useState } from 'react'

import { IoHelpCircleOutline } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'

import { useSimulation } from '@meutudo/core/contexts'
import meuTudoLogo from '@meutudo/core/assets/images/logo-mini.png'

import * as S from './Simuation.styles'
import { currency, formatDate } from '@meutudo/core/helpers'
import { Card } from '../card'
import { Link } from 'react-router-dom'

export type SimuationProps = {}

const DEFAULT_OPTIONS_DATE = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
}

export const Simuation: React.FC<SimuationProps> = () => {
    const { simulation } = useSimulation()
    const [nearEstimatedDate, setEstimatedDate] = useState(() =>
        formatDate(simulation?.nearEstimatedDate)
    )
    const [fatEstimatedDate, setFatEstimatedDate] = useState(() =>
        formatDate(simulation?.fatEstimatedDate, DEFAULT_OPTIONS_DATE)
    )

    useEffect(() => {
        if (simulation.nearEstimatedDate) {
            setEstimatedDate(formatDate(simulation.nearEstimatedDate))
        }
    }, [simulation.nearEstimatedDate])

    useEffect(() => {
        if (simulation.fatEstimatedDate) {
            setFatEstimatedDate(
                formatDate(simulation.fatEstimatedDate, DEFAULT_OPTIONS_DATE)
            )
        }
    }, [simulation.fatEstimatedDate])

    return (
        <S.Container as={Card} leftLight radius={8}>
            <S.Context>
                <S.Logo>
                    <img src={meuTudoLogo} alt="Meu Tudo" />
                </S.Logo>
                <S.Prices>
                    <strong>
                        {`${simulation.numberOfInstallments} parcelas de `}
                    </strong>
                    <S.Price>{currency(simulation.installmentValue)}</S.Price>
                    <div>Total de {currency(simulation.contractValue)}</div>
                </S.Prices>
                <S.Rates>
                    com taxa de
                    <strong>{simulation.rate * 100}% a.m.</strong>
                </S.Rates>
            </S.Context>

            <S.Date>
                Previsão de pagamento <IoHelpCircleOutline size={14} />
                <strong>
                    {nearEstimatedDate &&
                        fatEstimatedDate &&
                        `${nearEstimatedDate} a ${fatEstimatedDate}`}
                </strong>
            </S.Date>
            <S.Actions>
                <S.ActionButton to="/" as={Link}>
                    Contratar
                    <IoIosArrowForward size={14} />
                </S.ActionButton>
            </S.Actions>
        </S.Container>
    )
}
