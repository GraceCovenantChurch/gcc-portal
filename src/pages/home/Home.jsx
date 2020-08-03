import React from "react";

import DisplayAccount from "components/auth/DisplayAccount";
import Splash from "pages/splash/Splash";

import { UserContextConsumer } from "context/UserContext";

const Home = () => {
  return (
    <UserContextConsumer>
      {({ user, authState }) => {
        if (authState) {
          return <DisplayAccount user={user} />;
        } else {
          return <Splash />;
        }
      }}
    </UserContextConsumer>
  );
};

export default Home;
