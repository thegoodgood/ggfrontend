const defaultState = ""

export default ( state = defaultState, action ) => {
  switch ( action.type ) {
    case "SEARCH_REQUEST_START":
      return { ...state, loading: true };
    case "SEARCH_REQUEST_SUCCESS":
      return { ...action.user, currentUser: action.user, loading: false };
    case "SEARCH_REQUEST_FAILURE":
      return { ...state, loading: false };
    default:
      return state;
  }
};
