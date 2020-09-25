import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import ForgoutPassword from './pages/ForgoutPassword'
import UserRegistration from "./pages/UserRegistration"
import Dashboard from "./pages/Dashboard"

import isAuthenticated from "./global/Auth";
import History from "./global/History"



const PrivateRoute  = ({ component: Component, ...rest }:any) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/Signin", state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => (
  <Router history={History}>
    <Switch>
      <Route exact path="/Signin" component={Login} />
      <Route exact path="/ForgoutPassword" component={ForgoutPassword}/>
      <Route exact path="/UserRegistration" component={UserRegistration}/>
      <PrivateRoute exact path="/Dashboard" component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
