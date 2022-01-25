import clsx from 'clsx'
import { FunctionComponent } from 'react'
import { IconType } from 'react-icons'
import styles from './barItem.module.scss'

export interface BarItemProps {
  icon: IconType
  label: string
}

export const BarItem: FunctionComponent<BarItemProps> = ({
  icon: Icon,
  label,
}) => {
  return (
    <button className={styles.root}>
      <Icon size={24} />
      <span className={clsx('tp-label_1', styles.label)}>{label}</span>
    </button>
  )
}
