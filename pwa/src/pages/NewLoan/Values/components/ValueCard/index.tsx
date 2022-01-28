import { Paper, PaperProps } from '@/components/Paper'
import { FunctionComponent } from 'react'
import styles from './valueCard.module.scss'

export interface ValueCardProps extends PaperProps {}

export const ValueCard: FunctionComponent<ValueCardProps> = ({
  children,
  ...props
}) => {
  return (
    <Paper className={styles.root} {...props}>
      <span className="tp-body_3">{children}</span>
    </Paper>
  )
}
