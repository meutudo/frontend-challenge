import { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { HomeHeader } from './components/HomeHeader'
import { Card } from './components/Card'
import { ContentTitle } from '@/components/ContentTitle'

import styles from './home.module.scss'
import { MarginService } from '@/services/Margin'
import { IGetCurrentMarginsData } from '@/services/Margin/types'
import { GrowSpinner } from '@/components/GrowSpinner'
import { numberToCurrency } from '@/utils/numberToCurrency'
import { cardsData } from './data'

const Home: FunctionComponent = () => {
  const [currentMargins, setCurrentMargins] = useState<IGetCurrentMarginsData>(
    null,
  )
  const [loadingMargins, setLoadingMargins] = useState(false)

  useEffect(() => {
    async function fetchMargins() {
      try {
        setLoadingMargins(true)
        const margins = await MarginService.getCurrentMargins()
        setCurrentMargins(margins)
      } catch (err) {
        console.log('error on fetch margins: ', err)
      } finally {
        setLoadingMargins(false)
      }
    }

    fetchMargins()
  }, [])

  if (loadingMargins) {
    return <GrowSpinner />
  }

  if (!loadingMargins && !currentMargins) {
    return <h2>Não encontramos seus dados</h2>
  }

  return (
    <Fragment>
      <HomeHeader balance={currentMargins.totalMaxValue} />
      <div className="pageContainer" style={{ overflow: 'auto' }}>
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
