import {
  getTweetsStart, getTweetsSuccess, getTweetsFailure
} from './tweetActions';

import {BASE_URL} from '../../apiConstants'


//-------------FETCH TWEETS

  export const getTweetsAction = () => dispatch => {
    dispatch(getTweetsStart())
      return fetch("http://localhost:3000/tweets")
      .then(res => res.json())
      .then(tweets => {
        dispatch(getTweetsSuccess(tweets))
        })
        .catch(error => {
          dispatch(getTweetsFailure(error))
        })

      }


//fetch tweets is the

export const fetchUserFromDB = id => {
  return fetch(`${BASE_URL}/users/${id}`)
  .then(r => r.json());
};
