import {
  CREATE_USER,
  DELETE_USER,
  GET_USER,
  USER_LOGIN,
  USER_LOGOUT
} from '../actions/types';

const defaultState = {
<<<<<<< HEAD
  username: ""
=======
  username: "",
  password: ""
>>>>>>> sundNight
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case DELETE_USER:
      return {};
    case CREATE_USER:
      return action.payload;
    case USER_LOGIN:
      return action.payload;
    case USER_LOGOUT:
      localStorage.clear()
      return {};
    default:
      return state;
  }
};

export default userReducer
