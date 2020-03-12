import React from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContextConsumer } from "context/UserContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <UserContextConsumer>
      {({ user, isLoggedIn }) => {
        return (
          <Route
            {...rest}
            render={props =>
              isLoggedIn === true ? (
                <Component {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        );
      }}
    </UserContextConsumer>
  );
};

export default PrivateRoute;
