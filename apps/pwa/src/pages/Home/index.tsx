import { Fragment, FunctionComponent, useMemo } from 'react'
import { HomeHeader } from './components/HomeHeader'
import { Card } from './components/Card'
import { ContentTitle } from '@/components/ContentTitle'

import styles from './home.module.scss'
import { MarginService } from '@tudo/services/Margin'
import { GrowSpinner } from '@/components/GrowSpinner'
import { numberToCurrency } from '@tudo/utils/numberToCurrency'
import { getCardsData } from './data'
import { useHistory } from 'react-router-dom'
import { useQuery } from 'react-query'

export const Home: FunctionComponent = () => {
  const history = useHistory()
  const { data: currentMargins, isLoading: loadingMargins } = useQuery(
    'currentMargins',
    () => MarginService.getCurrentMargins(),
  )

  const cardsData = useMemo(() => getCardsData({ history }), [history])

  if (loadingMargins) {
    return <GrowSpinner />
  }

  if (!loadingMargins && !currentMargins) {
    return <h2>Não encontramos seus dados</h2>
  }

  return (
    <Fragment>
      <HomeHeader balance={currentMargins.totalMaxValue} />
      <div className="pageContainer">
        <ContentTitle style={{ marginBottom: 6 }}>Oportunidades</ContentTitle>

        <div className={styles.cardsContainer}>
          {cardsData.map(({ marginKey, ...rest }, index) => {
            if (!Object.keys(currentMargins).includes(marginKey)) return null

            const margin = currentMargins[marginKey]

            return (
              <Card
                key={index}
                {...rest}
                subtitle={margin ? numberToCurrency(margin) : undefined}
                disabled={!margin}
              />
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Home
