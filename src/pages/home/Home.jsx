import React from "react";

import DisplayAccount from "components/auth/DisplayAccount";
import Splash from "pages/splash/Splash";

import { UserContextConsumer } from "context/UserContext";

const Home = () => {
  return (
    <UserContextConsumer>
      {({ user, isLoggedIn }) => {
        return (
          <div>{isLoggedIn ? <DisplayAccount user={user} /> : <Splash />}</div>
        );
      }}
    </UserContextConsumer>
  );
};

export default Home;
