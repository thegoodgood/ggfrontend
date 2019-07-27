import { combineReducers } from 'redux';
import tweetReducer from './tweetReducer';
import hashtagReducer from './hashtagReducer';
import userReducer from './userReducer';
import topicReducer from './topicReducer';

export const rootReducer = combineReducers({
  tweets: tweetReducer,
  hashtags: hashtagReducer,
  user: userReducer,
  topic: topicReducer
});
