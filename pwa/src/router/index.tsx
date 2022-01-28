import { FunctionComponent } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import { Home, NewLoan } from '@/pages'

const Router: FunctionComponent = props => {
  return (
    <Switch {...props}>
      <Route exact path="/" component={Home} />
      <Route path="/newloan" component={NewLoan} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Router
