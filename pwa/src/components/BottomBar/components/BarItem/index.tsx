import { FunctionComponent } from 'react'
import { IconType } from 'react-icons'
import styles from './styles.module.scss'

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
      <span className="tp-label_1">{label}</span>
    </button>
  )
}
