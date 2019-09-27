import React from "react";
import { bool, func, node, object, oneOfType } from "prop-types";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: bool.isRequired,
  component: oneOfType([func, node, object])
};

PrivateRoute.defaultProps = {
  isAuthenticated: false
};

export default PrivateRoute;
