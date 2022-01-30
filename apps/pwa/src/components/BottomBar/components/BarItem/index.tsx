import clsx from 'clsx'
import { FunctionComponent, HTMLAttributes } from 'react'
import { IconType } from 'react-icons'
import styles from './barItem.module.scss'
import { primaryColor } from '@/styles/variables.module.scss'
export interface BarItemProps extends HTMLAttributes<HTMLButtonElement> {
  icon: IconType
  label: string
  active?: boolean
}

export const BarItem: FunctionComponent<BarItemProps> = ({
  icon: Icon,
  label,
  active = false,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.root, { [styles.active]: active })}
      {...props}
    >
      <Icon size={24} color={active ? primaryColor : '#000'} />
      <span className={clsx('tp-label_1', styles.label)}>{label}</span>
    </button>
  )
}
