import { Fragment, FunctionComponent } from 'react'
import { Button } from '@/components/Button'
import { HomeHeader } from './components/HomeHeader'

const Home: FunctionComponent = () => {
  return (
    <Fragment>
      <HomeHeader />
      <div className="pageContainer">
        <h1>Hello</h1>
        <Button>Hello!</Button>
      </div>
    </Fragment>
  )
}

export default Home
