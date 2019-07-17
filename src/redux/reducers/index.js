import { combineReducers } from 'redux';
import tweetReducer from './tweetReducer';
import hashtagReducer from './hashtagReducer';

export default combineReducers({
  tweets: tweetReducer,
  hashtags: hashtagReducer
});
