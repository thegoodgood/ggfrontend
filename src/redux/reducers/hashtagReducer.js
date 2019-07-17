import { FETCH_HASHTAGS } from "../actions/types";

const defaultState = {
  hashtags: []
};

const hashtagReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_HASHTAGS:
      return {
        ...state,
        hashtags: action.payload
      };
    default:
      return state;
  }
};

export default hashtagReducer;
