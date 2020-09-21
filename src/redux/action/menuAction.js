/* eslint-disable import/prefer-default-export */
import {actions, pending, fulfilled, rejected} from './actionTypes';
import * as apiCalls from '../../utils/apicalls';

const getMenuRequest = (menuType) => {
  return {
    type: actions.getMenu + pending,
    payload: {menuType},
  };
};

const getMenuFulfilled = (data, menuType) => {
  return {
    type: actions.getMenu + fulfilled,
    payload: {data, menuType},
  };
};

const getMenuRejected = (error) => {
  return {
    type: actions.getMenu + rejected,
    payload: {error},
  };
};

export const changeQuantity = (id, num) => {
  return {
    type: actions.changeQuantity,
    payload: {id, num},
  };
};

export const addToCart = (menu) => {
  return {
    type: actions.addToCart,
    payload: {menu},
  };
};

export const removeFromCart = (id) => {
  return {
    type: actions.removeFromCart,
    payload: {id},
  };
};

export const clearCart = () => {
  return {
    type: actions.clearCart,
  };
};

export const getMenu = (url, menuType) => {
  return (dispatch) => {
    dispatch(getMenuRequest(menuType));
    apiCalls
      .getData(url)
      .then((res) => {
        // console.log(res.data);
        dispatch(getMenuFulfilled(res.data, menuType));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getMenuRejected(error));
      });
  };
};

export const getOrderHistory = (id) => {
  return (dispatch) => {
    dispatch({type: actions.getOrderHistory + pending});
    apiCalls
      .getOrderHistory(id)
      .then((res) => {
        dispatch({type: actions.getOrderHistory + fulfilled, payload: {data: res.data.data}});
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: actions.getOrderHistory + rejected, payload: {error: err}});
      });
  };
};

export const addOrder = (data) => {
  return (dispatch) => {
    dispatch({type: actions.addOrder + pending});
    apiCalls
      .addOrder(data)
      .then((res) => {
        dispatch({type: actions.addOrder + fulfilled, payload: {msg: res.data.data.msg}});
      })
      .catch((err) => {
        dispatch({type: actions.addOrder + rejected, payload: {error: err}});
      });
  };
};
