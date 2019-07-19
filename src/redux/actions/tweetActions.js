import { FETCH_TWEETS,SAVE_ALL_TWEETS } from "./types";
import { FETCH_HASHTAGS,SAVE_ALL_HASHTAGS } from "./types";

export const fetchTweets = tweets => ({
  type: FETCH_TWEETS,
  payload: tweets
});

export const saveAllTweets = tweets => ({
  type: SAVE_ALL_TWEETS,
  payload: tweets
});






//--------------------------------------FOR HASHTAGS


export const fetchHashtags = hashtags => ({
  type: FETCH_HASHTAGS,
  payload: hashtags
});

export const saveAllHashtags = hashtags => ({
  type: SAVE_ALL_HASHTAGS,
  payload: hashtags
});
