import { createContext, FunctionComponent, useContext } from 'react'

export interface IAppContext {
  teste: string
}

const AppContext = createContext<IAppContext>(null)

export const AppProvider: FunctionComponent = ({ children }) => {
  return (
    <AppContext.Provider value={{ teste: 'abc' }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}
