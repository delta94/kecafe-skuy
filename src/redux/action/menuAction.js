/* eslint-disable import/prefer-default-export */
import {actions, pending, fulfilled, rejected} from './actionTypes';
import * as apiCalls from '../../utils/apicalls';

const getMenuPreviewRequest = () => {
  return {
    type: actions.getMenuPreview + pending,
  };
};

const getMenuPreviewFulfilled = (menu, menuType) => {
  return {
    type: actions.getMenuPreview + fulfilled,
    payload: {menu, menuType},
  };
};

const getMenuPreviewRejected = (error) => {
  return {
    type: actions.getMenuPreview + rejected,
    payload: {error},
  };
};

export const getMenuPreview = (url, menuType) => {
  return (dispatch) => {
    dispatch(getMenuPreviewRequest());
    apiCalls
      .getData(url)
      .then((res) => {
        dispatch(getMenuPreviewFulfilled(res.data.menu, menuType));
      })
      .catch((error) => {
        dispatch(getMenuPreviewRejected(error));
      });
  };
};
