import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

http.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('access') ?? false;
  config.headers.Authorization = token ? `Bearer ${token}` : null;
  return config;
});
