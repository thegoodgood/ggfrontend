import {
  getHashtagsStart, getHashtagsSuccess, getHashtagsFailure
} from './hashtagActions';

export const getHashtagsAction = () => dispatch => {
  dispatch(getHashtagsStart())
  return fetch("http://localhost:3000/hashtags")
  .then(res => res.json())
  .then(hashtag => {
    dispatch(getHashtagsSuccess(hashtag))
  })
  .catch(error => {
    dispatch(getHashtagsFailure(error))
  })
}
