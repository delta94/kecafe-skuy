/* eslint-disable no-else-return */
import {actions, pending, fulfilled, rejected} from '../action/actionTypes';

const initialState = {
  preview: {
    mainCourseMenu: [],
    dessertMenu: [],
    beverageMenu: [],
    snackMenu: [],
  },
  menu: [],
  cart: [],
  loading: true,
  error: false,
  msg: '',
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.getMenuPreview + pending:
      return {
        ...state,
        loading: true,
        msg: 'loading',
      };
    case actions.getMenuPreview + fulfilled:
      switch (action.payload.menuType) {
        case 'MAIN_COURSE':
          return {
            ...state,
            preview: {
              ...state.preview,
              mainCourseMenu: action.payload.menu,
            },
            loading: false,
            msg: 'done',
          };
        case 'DESSERT':
          return {
            ...state,
            preview: {
              ...state.preview,
              dessertMenu: action.payload.menu,
            },
            loading: false,
            msg: 'done',
          };
        case 'BEVERAGE':
          return {
            ...state,
            preview: {
              ...state.preview,
              beverageMenu: action.payload.menu,
            },
            loading: false,
            msg: 'done',
          };
        case 'SNACK':
          return {
            ...state,
            preview: {
              ...state.preview,
              snackMenu: action.payload.menu,
            },
            loading: false,
            msg: 'done',
          };
        default:
          return state;
      }
    case actions.getMenuPreview + rejected:
      return {
        ...state,
        error: true,
        msg: action.payload.error,
      };

    default:
      return state;
  }
};

export default menuReducer;
