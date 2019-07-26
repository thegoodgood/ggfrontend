// import { FETCH_TWEETS,SAVE_ALL_TWEETS } from "./types";
// import { FETCH_HASHTAGS,SAVE_ALL_HASHTAGS } from "./types";
//
// export const fetchTweets = tweets => ({
//   type: "FETCH_TWEETS",
//   payload: tweets
// });
//
// export const saveAllTweets = tweets => ({
//   type: "SAVE_ALL_TWEETS",
//   payload: tweets
// });



const GET_TWEETS_START = "GET_TWEETS_START"

export const getTweetsStart = () => (
  { type: GET_TWEETS_START }
)
export const getTweetsSuccess = (tweets) => (
  { type: "GET_TWEETS_SUCCESS", tweets: tweets }
)
export const getTweetsFailure = (error) => {
  return { type: "GET_TWEETS_FAILURE", error: error }
}
