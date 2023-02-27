import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

import App from "./App";

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
