const GET_HASHTAGS_START = "GET_HASHTAGS_START"

export const getHashtagsStart = () => (
  { type: GET_HASHTAGS_START }
)
export const getHashtagsSuccess = (hashtags) => (
  { type: "GET_HASHTAGS_SUCCESS", hashtags: hashtags }
)
export const getHashtagsFailure = (error) => {
  return { type: "GET_HASHTAGS_FAILURE", error: error }
}
