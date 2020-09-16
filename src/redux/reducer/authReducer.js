import {actions, pending, fulfilled, rejected} from '../action/actionTypes';

const initialState = {
  session: {
    user: {},
    token: '',
  },
  error: false,
  msg: '',
  loading: true,
  isValid: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.register + pending:
      return {
        ...state,
        loading: true,
      };
    case actions.register + fulfilled:
      return {
        ...state,
        session: {
          ...state.session,
          user: action.payload.user,
          token: action.payload.token,
        },
        error: false,
        msg: action.payload.msg,
        loading: false,
        isValid: true,
      };
    case actions.register + rejected:
      return {
        ...state,
        error: true,
        loading: false,
        isValid: false,
        msg: action.payload.error,
      };
    case actions.login + pending:
      return {
        ...state,
        loading: true,
      };
    case actions.login + fulfilled:
      return {
        ...state,
        session: {
          ...state.session,
          user: action.payload.user,
          token: action.payload.token,
        },
        error: false,
        msg: action.payload.msg,
        loading: false,
        isValid: true,
      };
    case actions.login + rejected:
      return {
        ...state,
        error: true,
        loading: false,
        isValid: false,
        msg: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
