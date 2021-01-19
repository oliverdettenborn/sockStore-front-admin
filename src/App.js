import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetCSS from "./styles/global/ResetCSS";
import GlobalStyle from "./styles/global/Global";
import HelloWorld from "./pages/HelloWorld";

const App = () => (
  <Router>
    <ResetCSS />
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={HelloWorld} />
    </Switch>
  </Router>
);

export default App;
