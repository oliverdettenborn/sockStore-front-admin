import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Reset } from "styled-reset";

import { Admin, Resource } from "react-admin";

import { FaBookmark, FaSocks, FaBox } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import GlobalStyle from "./styles/Global";
import authProvider from "./config/authProvider";
import dataProvider from "./config/dataProvider";

import CategoriesList from "./components/Categories/List";
import CategoriesEdit from "./components/Categories/Edit";
import CategoriesCreate from "./components/Categories/Create";
import CategoriesShow from "./components/Categories/Show";

import ProductsList from "./components/Products/List";
import ProductsEdit from "./components/Products/Edit";
import ProductsCreate from "./components/Products/Create";
import ProductsShow from "./components/Products/Show";

import ClientsList from "./components/Clients/List";
import ClientsShow from "./components/Clients/Show";

import OrdersShow from "./components/Orders/Show";
import OrdersList from "./components/Orders/List";
import OrdersEdit from "./components/Orders/Edit";

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
        show={CategoriesShow}
        icon={FaBookmark}
      />
      <Resource
        name="products"
        list={ProductsList}
        edit={ProductsEdit}
        create={ProductsCreate}
        show={ProductsShow}
        icon={FaSocks}
      />
      <Resource
        name="clients"
        list={ClientsList}
        show={ClientsShow}
        icon={BsPeopleFill}
      />
      <Resource
        name="orders"
        list={OrdersList}
        show={OrdersShow}
        edit={OrdersEdit}
        icon={FaBox}
      />
    </Admin>
  </Router>
);

export default App;
