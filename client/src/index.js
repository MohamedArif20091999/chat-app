import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import reducers from "./reducers";
import { Router, Route, Link } from "react-router-dom";
import history from "./history";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
