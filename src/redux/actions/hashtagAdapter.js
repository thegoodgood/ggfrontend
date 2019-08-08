import {
  getHashtagsStart,
  getHashtagsSuccess,
  getHashtagsFailure
} from "./hashtagActions";
import { getTweetsSuccess, getTweetsFailure } from "./tweetActions";
const url = "http://localhost:3000"
export const getHashtagsAction = () => dispatch => {
  dispatch(getHashtagsStart());

  return fetch(`${url}/hashtags`)
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
  let keyword = hashtag.split("#")[1]
  
  return fetch(`${url}/get_hashtag_tweets`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      Accept: "Application/json"
    },
    body: JSON.stringify({
      keyword: keyword
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
