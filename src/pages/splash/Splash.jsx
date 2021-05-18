import React from "react";

import Title from "components/pages/Title";
import Subtitle from "components/pages/Subtitle";

import styles from "./Splash.module.scss";

const Splash = () => {
  return (
    <div className={styles.splash}>
      <div className="splash-text">
        <Title>
          Welcome to <b>GCC Portal</b>
        </Title>
        <Subtitle>
          This webpage is designed for administative purposes at Grace Covenant
          Church. To begin using this page, please use your Google Account to
          sign into GCC Portal.
        </Subtitle>
        <hr className="my-2" />
        <Subtitle>Placeholder: Lorem Ipsum</Subtitle>
      </div>
    </div>
  );
};

export default Splash;
