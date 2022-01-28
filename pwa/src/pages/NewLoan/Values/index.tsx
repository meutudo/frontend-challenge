import { useAppBar } from '@/components/AppBar'
import { ContentTitle } from '@/components/ContentTitle'
import { FunctionComponent } from 'react'

export const Values: FunctionComponent = () => {
  useAppBar({ title: 'Valores' })

  return (
    <ContentTitle style={{ marginBottom: 6 }}>
      De quanto você precisa?
    </ContentTitle>
  )
}

export default Values
