import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Reset } from "styled-reset";

import { Admin, Resource } from "react-admin";

import { FaBookmark, FaSocks } from "react-icons/fa";
// import { BsPeopleFill } from "react-icons/bs";
import GlobalStyle from "./styles/Global";
import authProvider from "./config/authProvider";
import dataProvider from "./config/dataProvider";

import CategoriesList from "./components/Categories/List";
import CategoriesEdit from "./components/Categories/Edit";
import CategoriesCreate from "./components/Categories/Create";

import ProductsList from "./components/Products/List";
import ProductsEdit from "./components/Products/Edit";
import ProductsCreate from "./components/Products/Create";

// import ClientsList from "./components/Clients/List";

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
        icon={FaBookmark}
      />
      <Resource
        name="products"
        list={ProductsList}
        edit={ProductsEdit}
        create={ProductsCreate}
        icon={FaSocks}
      />
      {/* <Resource name="clients" list={ClientsList} icon={BsPeopleFill} /> */}
    </Admin>
  </Router>
);

export default App;
