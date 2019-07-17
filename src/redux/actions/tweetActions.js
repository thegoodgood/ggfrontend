import { FETCH_TWEETS } from "./types";

export const fetchTweets = () => dispatch => {
  fetch("http://localhost:3000/tweets")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_TWEETS,
        payload: data
      });
    });
};

// TODO: confirm that payload should be data
