import { FunctionComponent } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import { Contracts, Help, Home, NewLoan, NotFound } from '@/pages'

const Router: FunctionComponent = props => {
  return (
    <Switch {...props}>
      <Route exact path="/" component={Home} />
      <Route path="/newloan" component={NewLoan} />
      <Route exact path="/notfound" component={NotFound} />
      <Route exact path="/contracts" component={Contracts} />
      <Route exact path="/help" component={Help} />
      <Redirect to="/notfound" />
    </Switch>
  )
}

export default Router
