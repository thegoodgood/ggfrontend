import {
  getTweetsStart, getTopicTweetsStart, getTweetsSuccess, getTweetsFailure
} from './tweetActions';

import {
getTopic,  getTopicStart, getTopicSuccess, getTopicFailure
} from './topicActions';


import {BASE_URL} from '../../apiConstants'
const tweets_url = "http://localhost:3000/tweets"


//-------------FETCH TWEETS

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



//-----------------------UPDATE TOPIC IN THE STORE
export const getTopicAction = (topic) => dispatch => {
    dispatch(getTopic(topic))
    }
