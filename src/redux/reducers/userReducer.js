const defaultState = {
  id: null,
  username: "",
  upvoted_tweets: [],
  upvotedTweetsId: []
};

const userReducer = ( state = defaultState, action ) => {
  switch ( action.type ) {
    case "LOGIN_REQUEST_START":
      return { ...state, loading: true };
    case "LOGIN_REQUEST_SUCCESS":
      return { ...action.user, currentUser: action.user, loading: false };
    case "LOGIN_REQUEST_FAILURE":
      return { ...state, loading: false };
    case "GET_PROFILE_REQUEST_SUCCESS":
      return { ...action.user, currentUser: action.user, loading: false } // TODO: is a return necessary here? kevin didn't use it
    case "ADD_TO_UPVOTED_TWEETS":
      return { ...state, upvoted_tweets: [ ...state.upvoted_tweets, ...state.upvotedTweetsId, action.tweet ] }
    case "REMOVE_FROM_UPVOTED_TWEETS":
      return { ...state, upvoted_tweets: state.upvoted_tweets.filter( ( tweet ) => tweet.id !== action.tweet.id ) }
    case 'DELETE_TWEET':
      return { ...state, upvoted_tweets: state.upvoted_tweets.filter( tweet => tweet.id !== action.tweet.id ) }
    default:
      return state;
  }
};

export default userReducer;
