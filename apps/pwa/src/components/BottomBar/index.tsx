import { FunctionComponent, useMemo } from 'react'
import styles from './bottomBar.module.scss'
import clsx from 'clsx'
import { MdHelpOutline } from 'react-icons/md'
import { IoDocumentsOutline } from 'react-icons/io5'
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai'
import { BarItem } from './components/BarItem'
import { useHistory, useRouteMatch } from 'react-router-dom'

export const BottomBar: FunctionComponent = () => {
  const history = useHistory()

  const matchRoot = useRouteMatch({
    path: ['/'],
    exact: true,
  })

  const matchNewLoan = useRouteMatch('/newloan')

  const matchHomeItem = useMemo(
    () => !!(matchRoot || matchNewLoan),
    [matchRoot, matchNewLoan],
  )

  return (
    <div className={clsx('bottomBar__root', styles.root)}>
      <div className={styles.container}>
        <BarItem
          icon={AiOutlineHome}
          label="Home"
          active={matchHomeItem}
          onClick={() => history.push('/')}
        />
        <BarItem
          icon={IoDocumentsOutline}
          label="Contratos"
          onClick={() => history.push('/contracts')}
        />
        <BarItem
          icon={MdHelpOutline}
          label="Dúvidas"
          onClick={() => history.push('/help')}
        />
        <BarItem
          icon={AiOutlineUser}
          label="Contas"
          onClick={() => history.push('/accounts')}
        />
      </div>
    </div>
  )
}
