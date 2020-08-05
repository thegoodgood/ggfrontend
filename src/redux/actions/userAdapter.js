const url = "https://thegoodgood.herokuapp.com/";
const users_url = `${url}/users`;

//-------------------------------- NEW USER SIGNUP
export const userSignupAction = ( username, password ) => async ( dispatch ) => {
  dispatch( { type: "SIGNUP_REQUEST_START" } );
  try {
    const res = await fetch( `${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify( {
        username: username,
        password: password,
      } ),
    } );
    const data = await res.json();
    localStorage.token = data.token;
    dispatch( { type: "SIGNUP_REQUEST_SUCCESS" } );
  }
  catch ( error ) {
    dispatch( { type: "SIGNUP_REQUEST_FAILURE", error: error } );
  }
};

//-------------------------------- USER LOGIN
export const userLoginAction = ( username, password ) => async ( dispatch ) => {
  dispatch( { type: "LOGIN_REQUEST_START" } );
  try {
    const res = await fetch( `${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify( {
        username: username,
        password: password,
      } ),
    } );
    const data = await res.json();
    localStorage.token = data.token;
    dispatch( { type: "LOGIN_REQUEST_SUCCESS" } );
  }
  catch ( error ) {
    dispatch( { type: "LOGIN_REQUEST_FAILURE", error: error } );
  }
};

//-------------------------------------- CURRENT USER
export const getCurrentUserAction = ( user ) => async ( dispatch ) => {
  dispatch( { type: "GET_PROFILE_REQUEST_START" } );

  try {
    const response = await fetch( `${url}/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        Accept: "application/json",
      },
    } );
    if ( response.status === 401 ) {
      throw new Error( "Unauthorized" );
    }
    const response_1 = response;
    const data = await response_1.json();
    if ( data.message === "Please log in" ) {
      throw new Error( "Unauthorized" );
    }
    const user = data;
    //argument of user
    dispatch( {
      type: "GET_PROFILE_REQUEST_SUCCESS",
      user: user,
    } );
  }
  catch ( error ) {
    if ( error.message === "Unauthorized" ) {
      dispatch( {
        type: "GET_PROFILE_REQUEST_FAILURE",
        error: error,
      } );
    }
  }
};

//------------------------UPDATE CURRENT USER
export const updateCurrentUserAction = ( newUsername, password, id ) => async (
  dispatch
) => {
  dispatch( { type: "GET_PROFILE_REQUEST_START" } );

  try {
    const response = await fetch( `${users_url}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify( {
        username: newUsername,
      } ),
    } );
    if ( response.status === 401 ) {
      throw new Error( "Unauthorized" );
    }
    const response_1 = response;
    const data = await response_1.json()
    if ( data.message === "Please log in" ) {
      throw new Error( "Unauthorized" );
    }
    const user = data;
    //argument of user
    console.log( user );
    dispatch( {
      type: "GET_PROFILE_REQUEST_SUCCESS",
      user: user,
    } );
  }
  catch ( error ) {
    if ( error.message === "Unauthorized" ) {
      dispatch( {
        type: "GET_PROFILE_REQUEST_FAILURE",
        error: error
      } );
    }
  }
};

//-------------------------------- USER LOGOUT

export const userLogoutAction = () => ( dispatch ) => {
  localStorage.clear();

  dispatch( { type: "USER_LOGOUT" } )
};
