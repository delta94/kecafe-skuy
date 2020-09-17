import {actions, pending, fulfilled, rejected} from '../action/actionTypes';

const initialState = {
  session: {
    user: {},
    token: '',
  },
  error: false,
  msg: '',
  loading: false,
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
    case actions.logout + pending:
      return {...state, loading: true};
    case actions.logout + fulfilled:
      return initialState;
    case actions.logout + rejected:
      return {
        ...state,
        loading: false,
        error: true,
        msg: action.payload.error,
      };
    case actions.updateUserData + pending:
      return {
        ...state,
        loading: true,
      };
    case actions.updateUserData + fulfilled:
      return {
        ...state,
        session: {
          ...state.session,
          user: action.payload.user,
        },
        loading: false,
        error: false,
      };
    case actions.updateUserData + rejected:
      return {
        ...state,
        error: true,
        loading: false,
        msg: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
