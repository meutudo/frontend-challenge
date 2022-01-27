import { Fragment } from 'react'
import { ICardData } from './types'
import IconNewLoan from '@shared/assets/newLoan-2.png'
import IconPortability from '@shared/assets/portability-2.png'
import IconRefinancing from '@shared/assets/refinancing-2.png'
import IconCreditCard from '@shared/assets/creditCard-2.png'

export const cardsData: ICardData[] = [
  {
    title: (
      <Fragment>
        Novo <br /> Empréstimo
      </Fragment>
    ),
    iconSrc: IconNewLoan,
    marginKey: 'loanMaxValue',
  },
  {
    title: 'Portabilidade',
    iconSrc: IconPortability,
    marginKey: 'portabilityMaxValue',
  },
  {
    title: 'Refinanciamento',
    iconSrc: IconRefinancing,
    marginKey: 'refinanceMaxValue',
  },
  {
    title: 'Cartão de crédito consignado',
    iconSrc: IconCreditCard,
    marginKey: 'creditCardMaxValue',
  },
]
