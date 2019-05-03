import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import App from "./App";

import configureStore from "./redux/store/store";
import * as serviceWorker from "./serviceWorker";
import "./styles/global.scss";

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
