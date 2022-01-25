import { FunctionComponent } from 'react'
import useHeight from '@/utils/useHeight'
import Router from '@/router'

const App: FunctionComponent = () => {
  // used to work around 100vh problems
  const height = useHeight()

  return (
    <main style={{ minHeight: height }}>
      <Router />
    </main>
  )
}

export default App
