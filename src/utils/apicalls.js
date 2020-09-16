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
