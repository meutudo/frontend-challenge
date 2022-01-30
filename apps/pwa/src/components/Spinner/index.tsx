import { FunctionComponent, HTMLAttributes } from 'react'
import { ImSpinner8 } from 'react-icons/im'
import styles from './spinner.module.scss'
import { primaryColor } from '@/styles/variables.module.scss'

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string
}

export const Spinner: FunctionComponent<SpinnerProps> = ({
  color,
  ...props
}) => {
  return (
    <span {...props}>
      <ImSpinner8
        size={50}
        className={styles.spinner}
        color={color || primaryColor}
      />
    </span>
  )
}
