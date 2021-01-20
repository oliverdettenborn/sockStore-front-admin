import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Reset } from "styled-reset";

import { Admin, Resource } from "react-admin";

import GlobalStyle from "./styles/Global";
import authProvider from "./config/authProvider";
import dataProvider from "./config/dataProvider";

import {
  CategoriesList,
  CategoriesEdit,
  CategoriesCreate,
} from "./components/Categories";

const App = () => (
  <Router>
    <Reset />
    <GlobalStyle />
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource
        name="categories"
        list={CategoriesList}
        edit={CategoriesEdit}
        create={CategoriesCreate}
      />
    </Admin>
  </Router>
);

export default App;
