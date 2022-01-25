import { FunctionComponent } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { MdOutlineHome } from 'react-icons/md'
import { BarItem } from './components/BarItem'

export const BottomBar: FunctionComponent = () => {
  return (
    <div className={clsx('bottomBar__root', styles.root)}>
      <div className={styles.container}>
        <BarItem icon={MdOutlineHome} label="Home" />
        <BarItem icon={MdOutlineHome} label="Contratos" />
        <BarItem icon={MdOutlineHome} label="Dúvidas" />
        <BarItem icon={MdOutlineHome} label="Contas" />
      </div>
    </div>
  )
}
