import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import { Browse } from "pages"

export const routes = {
  browse: "/browse"
}

const Routes = () => (
  <Switch>
    <Route exact path={routes.browse} component={Browse} />
    <Redirect to="/" />
  </Switch>
)

export { Routes }
