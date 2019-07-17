import { combineReducers } from 'redux';
import tweetReducer from './tweetReducer';
import hashtagReducer from './hashtagReducer';

// export default combineReducers({
//   tweets: tweetReducer,
//   hashtags: hashtagReducer
// });

export default combineReducers({
  tweetReducer,
  hashtagReducer
});

// A popular convention is to name reducers after the state slices they manage, so you can use ES6 property shorthand notation: combineReducers({ counter, todos }). This is equivalent to writing combineReducers({ counter: counter, todos: todos }).
