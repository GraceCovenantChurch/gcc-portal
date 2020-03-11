import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "components/NavigationBar";
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
          <div className={styles.app}>
            <header className={styles.appHeader}>
              <NavigationBar />
            </header>
            <div className={styles.main}>
              <Route exact path="/" component={Home} />
            </div>
          </div>
        </Router>
      </UserContextProvider>
    );
  }
}

export default App;
