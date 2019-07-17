import { FETCH_TWEETS } from "../actions/types";

const defaultState = {
  tweets: []
};

const tweetReducer = (state= defaultState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return {
        ...state,
        tweets: action.payload
      };
    default:
      return state;
  }
}

export default tweetReducer
