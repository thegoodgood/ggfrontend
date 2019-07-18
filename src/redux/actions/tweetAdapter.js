import {
  fetchTweets,
  saveAllTweets
} from './tweetActions';

import {BASE_URL} from '../../ApiConstants'


//-------------FETCH TWEETS

  export const fetchTweets = () => {
    fetch("http://localhost:3000/tweets")
      .then(res => res.json())
      .then(tweets => {
    console.log("hi",tweets);
        })
      })
      }


//fetch tweets is the

export const fetchUserFromDB = id => {
  return fetch(`${BASE_URL}/users/${id}`)
  .then(r => r.json());
};
