import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from '../card'
import newLoan from '@meutudo/core/assets/images/newLoan-2.png'
import portability from '@meutudo/core/assets/images/portability-2.png'
import creditCard from '@meutudo/core/assets/images/creditCard-2.png'
import refinancing from '@meutudo/core/assets/images/refinancing-2.png'

import * as S from './Opportunities.styles'

import { currency } from '@meutudo/core/helpers'
import { useOpportunities } from '@meutudo/core/contexts'

export type OpportunitiesProps = {}

export const Opportunities: React.FC<OpportunitiesProps> = () => {
    const {
        opportunities: {
            newLoanMaxValue,
            portabilityMaxValue,
            refinMaxValue,
            creditCardMaxValue
        }
    } = useOpportunities()

    return (
        <>
            <S.Title>Oportunidades</S.Title>
            <S.Container>
                <Card as={Link} to="/values" disabled={!newLoanMaxValue}>
                    <S.Image src={newLoan} alt="Novo Empréstimo" />
                    <S.Text>Novvo Empréstimo</S.Text>
                    {!!newLoanMaxValue && (
                        <S.Price>{currency(newLoanMaxValue)}</S.Price>
                    )}
                </Card>
                <Card as={Link} to="/values" disabled={!portabilityMaxValue}>
                    <S.Image src={portability} alt="Portabilidade" />
                    <S.Text>Portabilidade</S.Text>
                    {!!portabilityMaxValue && (
                        <S.Price>{currency(portabilityMaxValue)}</S.Price>
                    )}
                </Card>
                <Card as={Link} to="/values" disabled={!refinMaxValue}>
                    <S.Image src={refinancing} alt="Refinanciamento" />
                    <S.Text>Refinacioamento</S.Text>
                    {!!refinMaxValue && (
                        <S.Price>{currency(refinMaxValue)}</S.Price>
                    )}
                </Card>
                <Card as={Link} to="/values" disabled={!creditCardMaxValue}>
                    <S.Image
                        src={creditCard}
                        alt="Cartão de crédito consignado"
                    />
                    <S.Text>Cartão de crédito consignado</S.Text>
                    {!!creditCardMaxValue && (
                        <S.Price>{currency(creditCardMaxValue)}</S.Price>
                    )}
                </Card>
            </S.Container>
        </>
    )
}
