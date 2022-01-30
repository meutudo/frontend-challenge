import { FunctionComponent, ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}

export default Button
