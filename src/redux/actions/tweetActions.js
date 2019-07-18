import { FETCH_TWEETS,SAVE_ALL_TWEETS } from "./types";

export const fetchTweets = tweets => ({
  type: FETCH_TWEETS,
  payload: tweets
});

export const saveAllTweets = tweets => ({
  type: SAVE_ALL_TWEETS,
  payload: tweets
});

// TODO: confirm that payload should be data
