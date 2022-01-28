import { FunctionComponent } from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import Values from './Values'

export const NewLoan: FunctionComponent = () => {
  const { path, url } = useRouteMatch()

  return (
    <div className="pageContainer">
      <Switch>
        <Route exact path={`${path}/values`} component={Values} />
        <Redirect to={`${url}/values`} />
      </Switch>
    </div>
  )
}

export default NewLoan
