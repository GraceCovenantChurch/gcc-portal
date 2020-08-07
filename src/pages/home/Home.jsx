import React from "react";

import Welcome from "pages/home/Welcome";
import Splash from "pages/splash/Splash";

import { UserContextConsumer } from "context/UserContext";

const Home = () => {
  return (
    <UserContextConsumer>
      {({ user, authState }) => {
        if (authState) {
          return <Welcome user={user} />;
        } else {
          return <Splash />;
        }
      }}
    </UserContextConsumer>
  );
};

export default Home;
