import clsx from 'clsx'
import { FunctionComponent, HTMLAttributes } from 'react'

export interface ContentTitleProps extends HTMLAttributes<HTMLHeadElement> {}

export const ContentTitle: FunctionComponent<ContentTitleProps> = ({
  children,
  ...props
}) => {
  return (
    <h4 className={clsx('tp-head_4', 'm-0')} {...props}>
      {children}
    </h4>
  )
}
