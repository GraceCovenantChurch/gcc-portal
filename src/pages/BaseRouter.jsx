import React from "react";

import { Route } from "react-router-dom";

import Home from "pages/home/Home";
import Dashboard from "pages/dashboard/Dashboard";

import PrivateRoute from "components/auth/PrivateRoute";

import styles from "./BaseRouter.module.scss";

const BaseRouter = () => {
  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </div>
    </div>
  );
};

export default BaseRouter;
