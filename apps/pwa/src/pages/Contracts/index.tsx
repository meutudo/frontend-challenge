import { useAppBar } from '@/components/AppBar'
import { ContentTitle } from '@/components/ContentTitle'
import { FunctionComponent } from 'react'

export const Contracts: FunctionComponent = () => {
  useAppBar({ title: 'Contratos' })

  return (
    <div className="pageContainer">
      <ContentTitle>Contratos</ContentTitle>
    </div>
  )
}

export default Contracts
