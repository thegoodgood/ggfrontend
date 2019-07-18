import React from "react";
import PropTypes from "prop-types";
import TweetBody from "../components/Tweet";
import {fetchTweetsAction} from '../../Redux/actions/tweetActions'
import {connect} from 'react-redux';

class TweetsContainer extends React.Component {


  render() {

    console.log(this.props);
    let tweets = this.props.tweets.map(tweet => {
      return <TweetBody {...tweet} />;
    });
    return (
      <div>
        {tweets}
       </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    tweets: state.tweets.tweets
  };
};

const mapDispatchToProps = dispatch => ({
dispatchFetchTweets: () => dispatch(fetchTweetsAction()),
});

export default connect(
  mapStateToProps,
  null
)(TweetsContainer);
