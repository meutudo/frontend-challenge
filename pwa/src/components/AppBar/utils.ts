import { IAppBarContext } from './../../contexts/AppBar/index'
import { useAppBarContext } from '@/contexts/AppBar/index'
import { useEffect } from 'react'

interface IUseAppBarParams extends Partial<Pick<IAppBarContext, 'title'>> {}

export interface IUseAppBar {
  (params?: IUseAppBarParams): void
}

export const useAppBar: IUseAppBar = ({ title = 'Teste' } = {}) => {
  const { setIsAppBarOpen, setTitle, resetAppBar } = useAppBarContext()

  useEffect(() => {
    return () => {
      resetAppBar()
    }
  }, [resetAppBar])

  useEffect(() => {
    setIsAppBarOpen(true)
  }, [setIsAppBarOpen])

  useEffect(() => {
    setTitle(title)
  }, [title, setTitle])
}
