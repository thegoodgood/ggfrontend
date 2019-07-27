
const defaultState = ""


const topicReducer = (state = defaultState, action) => {
switch (action.type) {
  case "GET_TOPIC":
    return { topic: action.topic};
  case "TOPIC_REQUEST_FAILURE":
    return { ...state, loading: false };
  default:
    return state;
  }
};

export default topicReducer;
