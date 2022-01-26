import { Fragment, FunctionComponent } from 'react'
import { HomeHeader } from './components/HomeHeader'
import { Card } from './components/Card'
import { ContentTitle } from '@/components/ContentTitle'
import IconNewLoan from '@shared/assets/newLoan-2.png'
import IconPortability from '@shared/assets/portability-2.png'
import IconRefinancing from '@shared/assets/refinancing-2.png'
import IconCreditCard from '@shared/assets/creditCard-2.png'
import styles from './home.module.scss'

const Home: FunctionComponent = () => {
  return (
    <Fragment>
      <HomeHeader />
      <div className="pageContainer" style={{ overflow: 'auto' }}>
        <ContentTitle style={{ marginBottom: 6 }}>Oportunidades</ContentTitle>
        <div className={styles.cardsContainer}>
          <Card
            iconSrc={IconNewLoan}
            title={
              <Fragment>
                Novo <br /> Empréstimo
              </Fragment>
            }
            subtitle="Até R$ 3.058,10"
          />
          <Card
            iconSrc={IconPortability}
            title="Portabilidade"
            subtitle="Até R$ 2.000,00"
          />
          <Card iconSrc={IconRefinancing} title="Refinanciamento" disabled />
          <Card
            iconSrc={IconCreditCard}
            title="Cartão de crédito consignado"
            disabled
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Home
