
import {
  CREATE_USER,
  DELETE_USER,
  GET_USER,
  USER_LOGIN,
  // USER_LOGOUT
} from "../actions/types";

//-------------------------------- NEW USER SIGNUP
export const userSignupAction = (username, password) => dispatch => {
  dispatch({ type: "SIGNUP_REQUEST_START" })
  return fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(res => res.json())
  .then((data) => {
    localStorage.token = data.token
    dispatch({ type: 'SIGNUP_REQUEST_SUCCESS' })
  })
  .catch(error => {
    dispatch({ type: 'SIGNUP_REQUEST_FAILURE', error: error })
  })
}

//-------------------------------- USER LOGIN
export const userLoginAction = (username, password) => dispatch => {
  dispatch({ type: "LOGIN_REQUEST_START" })
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(res => res.json())
  .then((data) => {
    localStorage.token = data.token
    dispatch({ type: 'LOGIN_REQUEST_SUCCESS' })
  })
  .catch(error => {
    dispatch({ type: 'LOGIN_REQUEST_FAILURE', error: error })
  })
}


//-------------------------------- CURRENT USER (ORIGINAL)
// export const getCurrentUserAction = (user) => dispatch => {
//   dispatch({type: "GET_PROFILE_REQUEST_START"})
//
//   return fetch('http://localhost:3000/profile', {
//     headers: {
//       "Authorization": `Bearer ${localStorage.token}`,
//       "Accept": "application/json"
//        }
//      }).then((response) => {
//        if (response.status === 401) {
//          throw new Error("Unauthorized")
//        }
//        return response
//      }).then(response => {
//        return response.json()
//      }).then((data) => {
//        if (data.message === "Please log in") {
//          throw new Error("Unauthorized")
//        }
//        return data
//      }).then(user => {
//        dispatch({
//          type: "GET_PROFILE_REQUEST_SUCCESS",
//          user: user
//        })
//      }).catch((error) => {
//        if (error.message === "Unauthorized") {
//          dispatch({
//            type: "GET_PROFILE_REQUEST_FAILURE",
//            error: error
//          })
//        }
//      })
//    }

//-------------------------------- CURRENT USER (COPY)
   export const getCurrentUserAction = (user) => dispatch => {
     dispatch({type: "GET_PROFILE_REQUEST_START"})

     return fetch('http://localhost:3000/profile', {
       headers: {
         "Authorization": `Bearer ${localStorage.token}`,
         "Accept": "application/json"
          }
        }).then((response) => {
          if (response.status === 401) {
            throw new Error("Unauthorized")
          }
          return response
        }).then(response =>response.json())
        .then((data) => {

          if (data.message === "Please log in") {
            throw new Error("Unauthorized")
          }
          return data
        }).then(user => { //argument of user
          dispatch({
            type: "GET_PROFILE_REQUEST_SUCCESS",
            user: user
          })
        }).catch((error) => {
          if (error.message === "Unauthorized") {
            dispatch({
              type: "GET_PROFILE_REQUEST_FAILURE",
              error: error
            })
          }
        })
      }


   //-------------------------------- USER LOGOUT

   export const userLogoutAction = () => dispatch => {
     localStorage.clear()

     dispatch({ type: "USER_LOGOUT" })
   }
