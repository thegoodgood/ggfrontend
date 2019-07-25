
export const getCurrentUserAction = user => ({
  type: "GET_USER",
  payload: user,
});

export const userLoginAction = user => ({
  type: "USER_LOGIN",
  payload: user,
});

export const userLogoutAction = () => ({
  type: "USER_LOGOUT",
});

export const userSignupAction = user => ({
  type: "USER_SIGNUP",
  payload: user
});

export const deleteUserAction = () => ({
  type: "DELETE_USER",
});
