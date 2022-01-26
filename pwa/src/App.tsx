import { FunctionComponent } from 'react'
import useHeight from '@/utils/useHeight'
import Router from '@/router'
import { BottomBar } from './components/BottomBar'

const App: FunctionComponent = () => {
  // used to work around 100vh problems
  const height = useHeight()

  return (
    <main
      style={{ height: height, background: '#ECECEC' }}
      className="mainContainer"
    >
      <div className="growContainer">
        <Router />
      </div>
      <BottomBar />
    </main>
  )
}

export default App
