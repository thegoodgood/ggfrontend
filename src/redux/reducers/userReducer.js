import {
  CREATE_USER,
  DELETE_USER,
  GET_USER,
  GET_CURRENT_USER,
  USER_LOGIN,
  USER_LOGOUT
} from "../actions/types";

const defaultState = {
  id: null,
  username: ""
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return action.payload;
    case "DELETE_USER":
      return {};
    case "CREATE_USER":
      return action.payload;
    case "USER_LOGIN":
      return action.payload;
    case "USER_LOGOUT":
      localStorage.clear();
      return {};
    case "LOGIN_REQUEST_START":
      return { ...state, loading: true };
    case "LOGIN_REQUEST_SUCCESS":
      return { ...action.user,currentUser:action.user, loading: false };
    case "LOGIN_REQUEST_FAILURE":
      return { ...state, loading: false };
    case "GET_PROFILE_REQUEST_SUCCESS":
    return {...action.user,currentUser:action.user, loading: false} // TODO: is a return necessary here? kevin didn't use it
    default:
      return state;
  }
};

export default userReducer;
