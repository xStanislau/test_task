import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute.container";
import Login from "../pages/Login/Login";
import Private from "../pages/Private/Private.container";

const Navigator = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/private" component={Private} />
      <Route path="/" component={Login} />
    </Switch>
  );
};

export default Navigator;
