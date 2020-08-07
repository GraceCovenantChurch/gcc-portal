import React from "react";

import styles from "./Splash.module.scss";

const Splash = () => {
  return (
    <div className={styles.splash}>
      <div className="splash-text">
        <h1>
          Welcome to <b>GCC Portal</b>
        </h1>
        <p className="lead">
          Please be sure you have a Grace Covenant Google Account. <br />
          If you are confused, please contact web@gracecovenant.net <br />
        </p>
        <hr className="my-2" />
      </div>
    </div>
  );
};

export default Splash;
