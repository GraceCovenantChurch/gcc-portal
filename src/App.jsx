import React, { Component } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import NavigationBar from "components/nav/NavigationBar";

import BaseRouter from "pages/BaseRouter";

import { UserContextProvider } from "context/UserContext";

import { INITIAL_STATE } from "common/appConst";

// import styles from "./App.module.scss";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  render() {
    return (
      <UserContextProvider>
        <CssBaseline />
        <NavigationBar>
          <BaseRouter />
        </NavigationBar>
      </UserContextProvider>
    );
  }
}

export default App;
