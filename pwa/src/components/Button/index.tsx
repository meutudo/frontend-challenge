// Is just an example
import { FunctionComponent, ButtonHTMLAttributes } from 'react'
import { SerializedStyles } from '@emotion/react'

export interface ButtonProps extends ButtonHTMLAttributes<null> {
  css?: SerializedStyles
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => {
  return <button {...rest}>{children}</button>
}

export default Button
