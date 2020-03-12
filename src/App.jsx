import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import NavigationBar from "components/nav/NavigationBar";
import Home from "pages/home/Home";

import { UserContextProvider } from "context/UserContext";

import { INITIAL_STATE } from "common/appConst";

import styles from "./App.module.scss";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  render() {
    return (
      <UserContextProvider>
        <Router>
          <CssBaseline />
          <NavigationBar>
            <div className={styles.app}>
              <div className={styles.main}>
                <Route exact path="/" component={Home} />
              </div>
            </div>
          </NavigationBar>
        </Router>
      </UserContextProvider>
    );
  }
}

export default App;
