import {
  CREATE_USER,
  DELETE_USER,
  GET_USER,
  USER_LOGIN,
  USER_LOGOUT
} from "../actions/types";

const defaultState = {
  id: null,
  username: "",
  currentUser: ""
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_CURRENTUSER":
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
    case "GET_PROFILE_REQUEST_SUCCESS":
    return {...action.user, loading: false} // TODO: is a return necessary here? kevin didn't use it
    case "LOGIN_REQUEST_SUCCESS":
      return { ...action.user, loading: false };
    case "LOGIN_REQUEST_FAILURE":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default userReducer;
