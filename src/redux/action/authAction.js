/* eslint-disable import/prefer-default-export */
import AsyncStorage from '@react-native-community/async-storage';
import {actions, pending, fulfilled, rejected} from './actionTypes';
import * as apiCalls from '../../utils/apicalls';

const registerPending = () => {
  return {
    type: actions.register + pending,
  };
};

const registerFulfilled = (data) => {
  return {
    type: actions.register + fulfilled,
    payload: data,
  };
};

const registerRejected = (error) => {
  return {
    type: actions.register + rejected,
    payload: {error},
  };
};

export const register = (data) => {
  return (dispatch) => {
    dispatch(registerPending());
    apiCalls
      .register(data)
      .then((res) => {
        if (res.data.isSuccess) {
          const {
            id,
            first_name,
            last_name,
            phone_number,
            profile_image,
            level_id,
            token,
            msg,
          } = res.data.data;
          const user = {id, first_name, last_name, phone_number, profile_image, level_id};
          dispatch(registerFulfilled({user, token, msg}));
        } else {
          dispatch(registerRejected(res.data.data.msg));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(registerRejected(error));
      });
  };
};

const loginPending = () => {
  return {
    type: actions.login + pending,
  };
};

const loginFulfilled = (data) => {
  return {
    type: actions.login + fulfilled,
    payload: data,
  };
};

const loginRejected = (error) => {
  return {
    type: actions.login + rejected,
    payload: {error},
  };
};

export const login = (data) => {
  return (dispatch) => {
    dispatch(loginPending());
    apiCalls
      .login(data)
      .then((res) => {
        if (res.data.isSuccess) {
          const {
            id,
            first_name,
            last_name,
            phone_number,
            profile_image,
            level_id,
            token,
            msg,
          } = res.data.data;
          const user = {id, first_name, last_name, phone_number, profile_image, level_id};
          dispatch(loginFulfilled({user, token, msg}));
        } else {
          dispatch(loginRejected(res.data.data.msg));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginRejected(error));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({type: actions.logout + pending});
    AsyncStorage.removeItem('persist:root', (error) => {
      if (!error) {
        dispatch({type: actions.logout + fulfilled});
      } else {
        dispatch({type: actions.logout + rejected, payload: {error}});
      }
    });
  };
};

export const updateUserData = (id, data) => {
  return (dispatch) => {
    dispatch({type: actions.updateUserData + pending});
    apiCalls
      .updateUserData(id, data)
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({type: actions.updateUserData + fulfilled, payload: {user: res.data.data}});
        } else {
          dispatch({
            type: actions.updateUserData + rejected,
            payload: {error: res.data.data.message},
          });
        }
      })
      .catch((err) => {
        dispatch({type: actions.updateUserData + rejected, payload: {error: err}});
        console.log(err);
      });
  };
};
