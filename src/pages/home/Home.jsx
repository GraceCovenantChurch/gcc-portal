import React, { useEffect } from "react";

import DisplayAccount from "components/auth/DisplayAccount";
import Splash from "pages/splash/Splash";

import { UserContextConsumer } from "context/UserContext";

const Home = () => {
  return (
    <UserContextConsumer>
      {({ user, authState }) => {
        let component;

        if (authState) {
          component = <DisplayAccount user={user} />;
        } else {
          component = <Splash />;
        }

        return component;
      }}
    </UserContextConsumer>
  );
};

export default Home;
