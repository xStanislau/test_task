import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute.container";
import Login from "../pages/Login/Login";
import Private from "../pages/Private/Private.container";

const Navigator = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path={["/private", "/"]} component={Private} />
    </Switch>
  );
};

export default Navigator;
