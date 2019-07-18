import { FETCH_TWEETS } from "../actions/types";

const defaultState = {
  tweets: []
}

//-------------const reducer = (state, action) => {}--------
const tweetReducer = (state= defaultState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return {
        ...state,
        tweets: action.payload
      };

      case "SAVE_ALL_TWEETS":
      return {
        ...state, tweets: action.payload
      }

    default:
      return state;
  }
}

export default tweetReducer

// return {
//   ...state,
//   tweets:{
//   ...state,
//   tweets: action.payload}
// };
