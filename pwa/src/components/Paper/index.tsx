import clsx from 'clsx'
import { FunctionComponent } from 'react'
import styles from './paper.module.scss'

interface PaperProps {
  radius?: 'sm' | 'md'
  className?: string
}

export const Paper: FunctionComponent<PaperProps> = ({
  children,
  radius = 'sm',
  className,
}) => {
  return (
    <div className={clsx(styles.root, styles[`radius-${radius}`], className)}>
      {children}
    </div>
  )
}
