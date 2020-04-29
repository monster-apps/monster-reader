import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import { Browse, Login } from "pages"

export const routes = {
  browse: "/browse",
  login: "/login"
}

const Routes = () => (
  <Switch>
    <Route exact path={routes.browse} component={Browse} />
    <Route exact path={routes.login} component={Login} />
    <Redirect to={routes.login} />
  </Switch>
)

export { Routes }
