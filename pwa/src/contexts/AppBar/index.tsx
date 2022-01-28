import { StateSetter } from '@/types'
import {
  createContext,
  FunctionComponent,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

export interface IAppBarContext {
  isAppBarOpen: boolean
  setIsAppBarOpen: StateSetter<IAppBarContext['isAppBarOpen']>
  title: ReactNode
  setTitle: StateSetter<IAppBarContext['title']>
  resetAppBar: () => void
}

const DEFAULT_STATE = {
  isAppBarOpen: false,
  title: '',
}

const AppBarContext = createContext<IAppBarContext>(null)

export const AppBarProvider: FunctionComponent = ({ children }) => {
  const [isAppBarOpen, setIsAppBarOpen] = useState(DEFAULT_STATE.isAppBarOpen)
  const [title, setTitle] = useState(DEFAULT_STATE.title)

  const resetAppBar = useCallback(() => {
    setIsAppBarOpen(DEFAULT_STATE.isAppBarOpen)
    setTitle(DEFAULT_STATE.title)
  }, [])

  return (
    <AppBarContext.Provider
      value={{
        isAppBarOpen,
        setIsAppBarOpen,
        title,
        setTitle,
        resetAppBar,
      }}
    >
      {children}
    </AppBarContext.Provider>
  )
}

export const useAppBarContext = (): IAppBarContext => {
  const context = useContext(AppBarContext)
  if (!context) {
    throw new Error('useAppBarContext must be used within a AppBarProvider')
  }
  return context
}
