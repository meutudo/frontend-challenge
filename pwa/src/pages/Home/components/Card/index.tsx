import { Paper } from '@/components/Paper'
import clsx from 'clsx'
import { FunctionComponent, ReactNode } from 'react'
import styles from './card.module.scss'

export interface CardProps {
  iconSrc: string
  title: ReactNode
  subtitle?: string
  disabled?: boolean
  onClick?: () => void
}

export const Card: FunctionComponent<CardProps> = ({
  iconSrc,
  title,
  subtitle,
  disabled = false,
  onClick,
}) => {
  return (
    <Paper
      radius="md"
      className={clsx(styles.root, {
        [styles.disabled]: disabled,
        [styles.hasSubtitle]: !!subtitle,
      })}
      onClick={onClick}
    >
      <div className={styles.topContent}>
        <img src={iconSrc} width={44} />
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.titleBox}>
          <span className="tp-head_5">{title}</span>
        </div>
        {subtitle && (
          <div className={clsx('tp-body_1', styles.subtitle)}>{subtitle}</div>
        )}
      </div>
    </Paper>
  )
}
