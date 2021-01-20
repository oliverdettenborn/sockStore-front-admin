/* eslint-disable no-unused-expressions */
import API_URL from "./constants";

const authProvider = {
  login: ({ username, password }) => {
    const request = new Request(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ email: `${username}@sockstore.com.br`, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...auth,
            fullName: "Admin",
            id: 1,
            avatar: "/images/favicon.ico",
          })
        );
      })
      .catch(() => {
        throw new Error("Network error");
      });
  },
  checkError: (error) => {
    const { status } = error;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("auth") ? Promise.resolve() : Promise.reject(),
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const { id, fullName, avatar } = JSON.parse(localStorage.getItem("auth"));
      return Promise.resolve({ id, fullName, avatar });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
