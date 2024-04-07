import axios from 'axios';
import moment from 'moment';

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

http.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('access') ?? false;
  config.headers.Authorization = token ? `Bearer ${token}` : null;
  return config;
});

// Create an axios instance for headerless refresh
const refreshHTTP = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

// Check interceptors token expiration for axios request
http.interceptors.request.use(async (config) => {
  try {
    const refresh = localStorage.getItem('refresh');
    const expireAt = localStorage.getItem('expireAt');
    let access = localStorage.getItem('access') ?? '';

    // Refresh token if the difference between the time stored in localStorage and the current time is less than 0
    if (moment(expireAt).diff(moment()) < 0 && refresh) {
      const res = await refreshHTTP.post('/users/token/refresh/', {
        refresh: refresh,
      });
      access = res.data.access;
      localStorage.setItem('access', access);
      localStorage.setItem(
        'expireAt',
        moment().add(2, 'minute').format('yyyy-MM-DD HH:mm:ss'),
      );
    }
    config.headers.Authorization = access ? `Bearer ${access}` : null;
    return config;
  } catch (err) {
    console.log('리프레시 에러', err);
    localStorage.clear();
    alert('토큰이 만료되었습니다.\n다시 로그인해 주세요.');
    window.location.reload();
    return Promise.reject(err);
  }
});
