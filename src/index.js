import React from "react";
import ReactDOM from "react-dom";
import Root from "Root";
import App from "components/App";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Root>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Root>,
  document.querySelector("#root")
);
