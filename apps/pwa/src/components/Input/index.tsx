import clsx from 'clsx'
import { FunctionComponent, HTMLAttributes } from 'react'
import styles from './input.module.scss'

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  size?: number
}

export const Input: FunctionComponent<InputProps> = ({
  className,
  ...props
}) => {
  return (
    <input className={clsx('tp-body_3', styles.root, className)} {...props} />
  )
}
