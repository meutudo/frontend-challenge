import { Paper } from '@/components/Paper'
import clsx from 'clsx'
import { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './notFound.module.scss'

export const NotFound: FunctionComponent = () => {
  const history = useHistory()
  return (
    <div className={clsx('pageContainer', styles.root)}>
      <div className={styles.container}>
        <h1 className="tp-head_3">Página não encontrada</h1>
        <br />
        <button className={styles.button} onClick={() => history.push('/')}>
          <Paper>Voltar para o início</Paper>
        </button>
      </div>
    </div>
  )
}

export default NotFound
