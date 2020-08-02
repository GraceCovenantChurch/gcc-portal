import React from "react";
import { Route } from "react-router-dom";
import { useGoogleLogin } from "react-google-login";

import NotAuthenticated from "./NotAuthenticated";
import { UserContextConsumer } from "context/UserContext";

const PrivateRoute = (props) => {
  return (
    <UserContextConsumer>
      {({ user, authState }) => {
        let Component = props.component;

        if (authState) {
          return (
            <Route
              {...props}
              render={(props) => <Component user={user} {...props} />}
            />
          );
        } else {
          return <NotAuthenticated />;
        }
      }}
    </UserContextConsumer>
  );
};

export default PrivateRoute;
