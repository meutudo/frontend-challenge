import { useAppBarContext } from '@/contexts/AppBar'
import clsx from 'clsx'
import { FunctionComponent } from 'react'
import styles from './appBar.module.scss'
export * from './utils'

export const AppBar: FunctionComponent = () => {
  const { isAppBarOpen, title } = useAppBarContext()

  if (!isAppBarOpen) return null

  return (
    <header className={styles.root}>
      <h1 className={clsx('tp-label_3', styles.title)}>{title}</h1>
    </header>
  )
}
