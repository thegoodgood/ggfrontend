import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {fetchHashtags, saveAllHashtags} from '../../Redux/actions/tweetActions'


class HashtagsContainer extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3000/hashtags")
      .then(res => res.json())
      .then(hashtags => this.props.saveAllHashtags(hashtags))
      }

  render() {
    console.log(this.props);

    return (
      <div>
        {null}
       </div>
    )
  }
}

  function mapStateToProps(state, hashtags) {
    return {
      hashtags: state.hashtags
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      fetchHashtags: () => {dispatch(fetchHashtags())},
      saveAllHashtags: (hashtags) => { dispatch({ type: "SAVE_ALL_HASHTAGS", payload: hashtags})}
    }
  }




  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HashtagsContainer);

// let tweets = this.props.tweets.tweets.map(tweet => {
//   return <TweetBody {...tweet} />;
// });