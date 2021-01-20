import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Reset } from "styled-reset";

import { Admin, Resource, ListGuesser } from "react-admin";

import GlobalStyle from "./styles/Global";
import authProvider from "./config/authProvider";
import dataProvider from "./config/dataProvider";

const App = () => (
  <Router>
    <Reset />
    <GlobalStyle />
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="categories" list={ListGuesser} />
    </Admin>
  </Router>
);

export default App;
