import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import NavigationBar from "./components/NavigationBar";
import Splash from "./pages/Splash";

import { simpleAction } from "./redux/actions/simpleAction";

import styles from "./App.module.scss";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <header className={styles.appHeader}>
            <NavigationBar />
          </header>
          <div className={styles.main}>
            <Route exact path="/" component={Splash} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
