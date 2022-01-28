import { useAppBar } from '@/components/AppBar'
import { ContentTitle } from '@/components/ContentTitle'
import { FunctionComponent } from 'react'
import { ValueCard } from './components/ValueCard'
import styles from './values.module.scss'

export const Values: FunctionComponent = () => {
  useAppBar({ title: 'Valores' })

  return (
    <ContentTitle style={{ marginBottom: 6 }}>
      De quanto você precisa?
      <div className={styles.valuesContainer}>
        <ValueCard>R$ 300,00</ValueCard>
        <ValueCard>R$ 300,00</ValueCard>
        <ValueCard>R$ 300,00</ValueCard>
        <ValueCard>R$ 300,00</ValueCard>
      </div>
    </ContentTitle>
  )
}

export default Values
