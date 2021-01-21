/* eslint-disable no-param-reassign */
import { fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import API_URL from "./constants";

const httpClient = async (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const { token } = JSON.parse(localStorage.getItem("auth"));
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(API_URL, httpClient);

export default dataProvider;
