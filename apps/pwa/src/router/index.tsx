import { FunctionComponent } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import {
  LoadableContracts,
  LoadableHelp,
  LoadableHome,
  LoadableNewLoan,
  LoadableNotFound,
} from '@/pages'

const Router: FunctionComponent = props => {
  return (
    <Switch {...props}>
      <Route exact path="/" component={LoadableHome} />
      <Route path="/newloan" component={LoadableNewLoan} />
      <Route exact path="/notfound" component={LoadableNotFound} />
      <Route exact path="/contracts" component={LoadableContracts} />
      <Route exact path="/help" component={LoadableHelp} />
      <Redirect to="/notfound" />
    </Switch>
  )
}

export default Router
