import React from "react";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { Provider } from "react-redux";
import rootReducer from "reducers";

export default ({ children, initState = {} }) => {
  const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(ReduxPromise)
  );
  window.store = store;
  return <Provider store={store}>{children}</Provider>;
};
