/* eslint-disable no-underscore-dangle */
export const actions = {
  getMenu: 'GET_MENU',
  changeQuantity: 'CHANGE_QUANTITY',
  addToCart: 'ADD_TO_CART',
  removeFromCart: 'REMOVE_FROM_CART',
  clearCart: 'CLEAR_CART',
  login: 'USER_LOGIN',
  register: 'USER_REGISTER',
  logout: 'USER_LOGOUT',
  updateUserData: 'UPDATE_USER_DATA',
  getOrderHistory: 'GET_ORDER_HISTORY',
  addOrder: 'ADD_ORDER',
};

export const pending = '_PENDING';
export const fulfilled = '_FULFILLED';
export const rejected = '_REJECTED';
