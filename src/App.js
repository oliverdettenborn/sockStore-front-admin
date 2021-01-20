import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Reset } from "styled-reset";

import GlobalStyle from "./styles/global/Global";

const App = () => (
  <Router>
    <Reset />
    <GlobalStyle />
    <Switch>
      <Route exact path="/">
        <h1>Hello, world</h1>
      </Route>
    </Switch>
  </Router>
);

export default App;
