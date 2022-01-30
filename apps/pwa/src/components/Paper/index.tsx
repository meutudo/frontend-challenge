import clsx from 'clsx'
import { FunctionComponent, HTMLAttributes } from 'react'
import styles from './paper.module.scss'

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
  radius?: 'sm' | 'md'
  className?: string
}

export const Paper: FunctionComponent<PaperProps> = ({
  children,
  radius = 'sm',
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(styles.root, styles[`radius-${radius}`], className)}
    >
      {children}
    </div>
  )
}
