import { FunctionComponent } from 'react'
import styles from './bottomBar.module.scss'
import clsx from 'clsx'
import { MdHelpOutline } from 'react-icons/md'
import { IoDocumentsOutline } from 'react-icons/io5'
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai'
import { BarItem } from './components/BarItem'

export const BottomBar: FunctionComponent = () => {
  return (
    <div className={clsx('bottomBar__root', styles.root)}>
      <div className={styles.container}>
        <BarItem icon={AiOutlineHome} label="Home" />
        <BarItem icon={IoDocumentsOutline} label="Contratos" />
        <BarItem icon={MdHelpOutline} label="Dúvidas" />
        <BarItem icon={AiOutlineUser} label="Contas" />
      </div>
    </div>
  )
}
