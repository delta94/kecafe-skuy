/* eslint-disable import/prefer-default-export */
import Axios from 'axios';
import {API_URL} from './environment';

export const getData = (url) => {
  return Axios.get(url);
};

export const register = (data) => {
  const url = `${API_URL}/auth/register`;
  return Axios.post(url, data);
};

export const login = (data) => {
  const url = `${API_URL}/auth/login`;
  return Axios.post(url, data);
};

export const getUserData = (id) => {
  const url = `${API_URL}/auth/user/${id}`;
  return Axios.get(url);
};

export const updateUserData = (id, data) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };
  const url = `${API_URL}/auth/user/${id}`;
  return Axios.patch(url, data, config);
};

export const getOrderHistory = (id) => {
  const url = `${API_URL}/history/id/${id}`;
  return Axios.get(url);
};

export const addOrder = (data) => {
  const url = `${API_URL}/addtransaction/order`;
  return Axios.post(url, data);
};
