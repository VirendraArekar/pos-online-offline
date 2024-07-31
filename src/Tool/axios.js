// axios.js
import Axios from "axios";

// Dynamic import
const getStore = async () => {
  const { store } = await import('<path-to-redux-store>/store.js');
  return store;
};

const axios = Axios.create({});

const serverUrl = process.env.REACT_APP_SERVER_URL;
export const baseURL = `${serverUrl}`;

axios.defaults.timeout = 120000; // Milliseconds
axios.interceptors.request.use(
  async function (config) {
    // Retreive token from Redux OR localStorage or ....
    const store = await getStore();
    const token = store?.getState()?.user?.token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Credentials"] = true;
    }
    config.headers["Content-Type"] = "application/json";
    config.credentials = "same-origin";
    config.baseURL = baseURL;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error?.response?.status === 403) {
      // Handle forbidden error
    }
    if (error?.response?.status === 401) {
      // Handle unauthorized error (e.g., log out the user)
    }
    throw error; // Propagate the error
  }
);

export default axios;