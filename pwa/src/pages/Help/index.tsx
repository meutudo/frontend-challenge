import { useAppBar } from '@/components/AppBar'
import { ContentTitle } from '@/components/ContentTitle'
import { FunctionComponent } from 'react'

export const Help: FunctionComponent = () => {
  useAppBar({ title: 'Dúvidas' })

  return (
    <div className="pageContainer">
      <ContentTitle>Dúvidas</ContentTitle>
    </div>
  )
}

export default Help
