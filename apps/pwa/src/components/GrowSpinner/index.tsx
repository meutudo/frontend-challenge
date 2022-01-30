import { FunctionComponent } from 'react'
import { Spinner } from '../Spinner'
import styles from './growSpinner.module.scss'

export const GrowSpinner: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <Spinner />
    </div>
  )
}
