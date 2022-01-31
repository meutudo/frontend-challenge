import { useAppBar } from '@/components/AppBar'
import { ContentTitle } from '@/components/ContentTitle'
import { Fragment, FunctionComponent } from 'react'
import { useQuery } from 'react-query'
import { ValueCard } from './components/ValueCard'
import styles from './values.module.scss'
import { ValuesService } from '@tudo/services/Values'
import { GrowSpinner } from '@/components/GrowSpinner'
import { numberToCurrency } from '@tudo/utils/numberToCurrency'

export const Values: FunctionComponent = () => {
  useAppBar({ title: 'Valores' })
  const { data: values, isLoading: loadingValues } = useQuery('values', () =>
    ValuesService.getCurrentMargins(),
  )

  if (loadingValues) {
    return <GrowSpinner />
  }

  return (
    <Fragment>
      <ContentTitle style={{ marginBottom: 6 }}>
        De quanto você precisa?
      </ContentTitle>
      {!!values?.suggestedValues && (
        <div className={styles.valuesContainer}>
          {values?.suggestedValues.map((value, index) => (
            <ValueCard key={index}>{numberToCurrency(value)}</ValueCard>
          ))}
        </div>
      )}
    </Fragment>
  )
}

export default Values
