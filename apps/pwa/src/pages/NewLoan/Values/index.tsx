import { useAppBar } from '@/components/AppBar'
import { ContentTitle } from '@/components/ContentTitle'
import { Fragment, FunctionComponent } from 'react'
import { useQuery } from 'react-query'
import { ValueCard } from './components/ValueCard'
import styles from './values.module.scss'
import { ValuesService } from '@tudo/services/Values'
import { GrowSpinner } from '@/components/GrowSpinner'
import { numberToCurrency } from '@tudo/utils/numberToCurrency'
import { Input } from '@/components/Input'
import clsx from 'clsx'

export const Values: FunctionComponent = () => {
  useAppBar({ title: 'Valores' })
  const { data: values, isLoading: loadingValues } = useQuery('values', () =>
    ValuesService.getSuggestedValues(),
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
      <div className={styles.bottomContainer}>
        <div className={styles.otherValueBox}>
          <label
            htmlFor="otherValueInput"
            className={clsx('tp-head_5', styles.otherValueLabel)}
          >
            Outro valor
          </label>
          <Input
            id="otherValueInput"
            size={10}
            className={styles.inputOverride}
            inputMode="numeric"
            defaultValue="R$ 00,00"
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Values
