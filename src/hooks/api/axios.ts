import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.bbpsp-backend-api.click',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status) {
      return Promise.reject(error);
    }
  },
);

export default instance;
