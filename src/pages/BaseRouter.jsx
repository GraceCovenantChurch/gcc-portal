import React from "react";

import { Route } from "react-router-dom";

import Home from "pages/home/Home";
import Dashboard from "pages/dashboard/Dashboard";
import Sermon from "pages/sermon/Sermon";

import PrivateRoute from "components/auth/PrivateRoute";
import NotAuthenticated from "components/auth/NotAuthenticated";

import styles from "./BaseRouter.module.scss";

const BaseRouter = () => {
  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={NotAuthenticated} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/sermon" component={Sermon} />
      </div>
    </div>
  );
};

export default BaseRouter;
