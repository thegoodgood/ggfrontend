import {
  getTweetsStart, getTopicTweetsStart, getTweetsSuccess, getTweetsFailure
} from './tweetActions';

import {
getTopic,  getTopicStart, getTopicSuccess, getTopicFailure
} from './topicActions';


import {BASE_URL} from '../../apiConstants'
const tweets_url = "http://localhost:3000/tweets"


//----------------------------------------FETCH TWEETS

  export const getTweetsAction = () => dispatch => {
    dispatch(getTweetsStart())
      return fetch(tweets_url)
      .then(res => res.json())
      .then(tweets => {
        dispatch(getTweetsSuccess(tweets))
        })
        .catch(error => {
          dispatch(getTweetsFailure(error))
        })
      }


//-------------FETCH SOCIAL COMMENTARY TWEETS
      export const getTopicTweetsAction = (topic) => dispatch => {
        let new_topic = topic.toLowerCase().split(" ").join("")
        dispatch(getTopicTweetsStart(new_topic))
          return fetch(`http://localhost:3000/${new_topic}`)
          .then(res => res.json())
          .then(tweets => {
            dispatch(getTweetsSuccess(tweets))
            })
            .catch(error => {
              dispatch(getTweetsFailure(error))
            })
          }

//-------------FETCH NEWS
      export const getNewsAction = () => dispatch => {
        dispatch(getTopicTweetsStart())
          return fetch(tweets_url`/news`)
          .then(res => res.json())
          .then(tweets => {
            dispatch(getTweetsSuccess(tweets))
            })
            .catch(error => {
              dispatch(getTweetsFailure(error))
            })
          }

//-------------FETCH EMBEDDED TWEET

  export const embedTweetAction = () => dispatch => {
    console.log("hiii");
    fetch("https://publish.twitter.com/oembed?url=https%3A%2F%2Ftwitter.com%2FInterior%2Fstatus%2F507185938620219395'", {
       mode: 'no-cors',
       "X-Frame-Options": "allow-from"
     })
    .then(res => res.json())
    .then(data => {
      return data
      console.log(data)
    })
    .catch(error => {
      return error
      console.log(error)})
  }

//-----------------------UPDATE TOPIC IN THE STORE
export const getTopicAction = (topic) => dispatch => {
    dispatch(getTopic(topic))
    }

// ------------------------------------------------------GET THE CURRENT TWEET
export const getCurrentTweetAction = (id) => dispatch => {
  dispatch({ type: "GET_CURRENT_TWEET_START" })

  return fetch(`http://localhost:3000/tweets/${id}`, {
    headers: {
      "Authorization": `Bearer ${localStorage.token}`
    }
  })
  .then(res => res.json())
  .then(tweet => {
    dispatch({ type: 'GET_CURRENT_TWEET_SUCCESS', tweet: tweet })
  })
  .catch(error => {
    dispatch({ type: 'GET_CURRENT_TWEET_FAILURE', error: error })
  })
}


// ----------------------------------------------------UPVOTE A TWEET

export const upvoteTweetAction = (id) => dispatch => {
  dispatch({ type: "GET_CURRENT_TWEET_START" })

  return fetch(`http://localhost:3000/tweets/${id}/upvote`, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${localStorage.token}`
    }
  })
  .then(res => res.json())
  .then(tweet => {
    dispatch({ type: 'GET_CURRENT_TWEET_SUCCESS', tweet: tweet })
    dispatch({ type: 'ADD_TO_UPVOTED_TWEETS', tweet: tweet })
  })
  .catch(error => {
    dispatch({ type: 'GET_CURRENT_TWEET_FAILURE', error: error })
  })
}
