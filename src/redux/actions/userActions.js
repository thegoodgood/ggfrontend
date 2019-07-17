import {
  CREATE_USER,
  DELETE_USER,
  GET_USER,
  USER_LOGIN,
  USER_LOGOUT
} from '../Redux/actions/types';

export const getUserAction = user => ({
  type: GET_USER,
  payload: user,
});

export const userLoginAction = user => ({
  type: USER_LOGIN,
  payload: user,
});

export const userLogoutAction = () => ({
  type: USER_LOGOUT,
});

export const createUserAction = user => ({
  type: CREATE_USER,
  payload: user,
});

export const deleteUserAction = () => ({
  type: DELETE_USER,
});
