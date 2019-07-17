import { FETCH_HASHTAGS } from "./actions/types";

const initialState = {
  hashtags: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_HASHTAGS:
      return {
        ...state,
        hashtags: action.payload
      };
    default:
      return state;
  }
}
