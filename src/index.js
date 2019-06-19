import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from "./reducers";
// needed dependancies
//  [x] applyMiddleware from redux
//  [x] thunk from redux-thunk
//  [x] logger from redux-logger
//  [x] rootReducer from ./reducers

const store = createStore(
  rootReducer,
  /* [x] applyMiddleware goes here */
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
