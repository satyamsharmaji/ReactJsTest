import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'
import Login from './screens/login'
import Dashboard from './screens/Dashboard'
import UserDetail from './screens/UserDetail'
import NoPageFound from './screens/NoPageFound'

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/userDetail/:id' component={UserDetail} />
        <Route exact path='*' component={NoPageFound} />

      </Switch>
    </Router>
  )
}
export default Routing
