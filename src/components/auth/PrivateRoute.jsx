import React from "react";
import { Redirect, Route } from "react-router-dom";

import { UserContextConsumer } from "context/UserContext";

const PrivateRoute = (props) => {
  return (
    <UserContextConsumer>
      {({ user, authState }) => {
        let Component = props.component;

        console.log(authState);

        if (authState) {
          return (
            <Route
              {...props}
              render={(props) => <Component user={user} {...props} />}
            />
          );
        } else {
          return <Redirect to="/" />;
        }
      }}
    </UserContextConsumer>
  );
};

export default PrivateRoute;
