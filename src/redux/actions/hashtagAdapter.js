import {
  getHashtagsStart,
  getHashtagsSuccess,
  getHashtagsFailure
} from "./hashtagActions";
import { getTweetsSuccess, getTweetsFailure } from "./tweetActions";

export const getHashtagsAction = () => dispatch => {
  dispatch(getHashtagsStart());
  return fetch("http://localhost:3000/hashtags")
    .then(res => res.json())
    .then(hashtag => {
      dispatch(getHashtagsSuccess(hashtag));
    })
    .catch(error => {
      dispatch(getHashtagsFailure(error));
    });
};

export const getHashtagSearchAction = hashtag => dispatch => {
  dispatch(getHashtagsStart());
  return fetch("http://localhost:3000/get_hashtag_tweets", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      Accept: "Application/json"
    },
    body: JSON.stringify({
      keyword: hashtag
    })
  })
    .then(res => res.json())
    .then(tweets => {
      dispatch(getTweetsSuccess(tweets));
    })
    .catch(error => {
      dispatch(getTweetsFailure(error));
    });
};
