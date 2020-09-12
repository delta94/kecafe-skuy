/* eslint-disable import/prefer-default-export */
import Axios from 'axios';

export const getData = (url) => {
  return Axios.get(url);
};
