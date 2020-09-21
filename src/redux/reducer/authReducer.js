import {actions, pending, fulfilled, rejected} from '../action/actionTypes';

const initialState = {
  session: {
    user: {
      id: 0,
      first_name: '',
      last_name: '',
      phone_number: '',
      profile_image: null,
      level_id: 1,
    },
    token: '',
  },
  error: false,
  msg: {
    login: 'Welcome',
    register: 'Welcome',
    logout: 'Logout',
  },
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
        msg: {...state.msg, register: action.payload.msg},
        loading: false,
        isValid: true,
      };
    case actions.register + rejected:
      return {
        ...state,
        error: true,
        loading: false,
        isValid: false,
        msg: {...state.msg, register: action.payload.error},
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
        msg: {...state.msg, login: action.payload.msg},
        loading: false,
        isValid: true,
      };
    case actions.login + rejected:
      return {
        ...state,
        error: true,
        loading: false,
        isValid: false,
        msg: {...state.msg, login: action.payload.error},
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
        msg: {...state.msg, logout: action.payload.error},
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
