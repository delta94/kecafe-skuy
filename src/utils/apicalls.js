/* eslint-disable import/prefer-default-export */
import Axios from 'axios';

export const getData = (url) => {
  return Axios.get(url);
};

export const register = (url, data) => {
  return Axios.post(url, data);
};

export const login = (url, data) => {
  return Axios.post(url, data);
};

export const getUserData = (url) => {
  return Axios.get(url);
};

export const updateUserData = (url, data) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };
  return Axios.patch(url, data, config);
};
