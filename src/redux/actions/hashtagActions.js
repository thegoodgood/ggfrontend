import { FETCH_HASHTAGS } from "./types";

export const fetchHashtags = () => dispatch => {
  fetch("http://localhost:3000/hashtags")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_HASHTAGS,
        payload: data
      });
    });
};

// TODO: confirm that payload should be data
