const defaultState = []

export default (state = defaultState, action) => {

  switch (action.type) {
    case 'GET_TWEETS_SUCCESS':
      return action.tweets
    default:
      return state
  }
}
