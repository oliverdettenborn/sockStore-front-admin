const API_DEV_URL = "http://localhost:3000/";

const API_PROD_URL = "Heroku link";

const PRODUCTION = false;

const API_URL = PRODUCTION ? API_PROD_URL : API_DEV_URL;

export default API_URL;
