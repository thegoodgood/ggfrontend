const defaultState = []

export default (state = defaultState, action) => {

  switch (action.type) {
    case 'GET_TWEETS_SUCCESS':
      return action.tweets
    case 'DELETE_TWEET':
      return state.filter(tweet => tweet.id !== action.tweet.id)
    default:
      return state
  }
}
