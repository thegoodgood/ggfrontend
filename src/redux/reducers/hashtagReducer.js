
const defaultState = []

export default (state = defaultState, action) => {

  switch (action.type) {
    case 'GET_HASHTAGS_SUCCESS':
      return action.hashtags
    default:
      return state
  }
}
