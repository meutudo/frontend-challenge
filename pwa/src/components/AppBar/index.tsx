import { useAppBarContext } from '@/contexts/AppBar'
import clsx from 'clsx'
import { FunctionComponent } from 'react'
import styles from './appBar.module.scss'
import { IoChevronBackOutline } from 'react-icons/io5'
export * from './utils'

export const AppBar: FunctionComponent = () => {
  const { isAppBarOpen, title, defaultLeftAction } = useAppBarContext()

  if (!isAppBarOpen) return null

  return (
    <header className={styles.root}>
      <button onClick={defaultLeftAction} className={styles.leftAction}>
        <IoChevronBackOutline size={20} color="#fff" />
      </button>
      <h1 className={clsx('tp-label_3', styles.title)}>{title}</h1>
    </header>
  )
}
