import React from "react";
import PropTypes from "prop-types";
import TweetBody from "../components/Tweet";
import { fetchTweets } from "../../Redux/actions/tweetActions";
import { connect } from "react-redux";

class TweetsTopics extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="topics">
        <span>Social</span>
        <span>Funny</span>
        <span>News</span>
      </div>
    );
  }
}

// function mapStateToProps(state, tweets) {
//   return {
//     tweets: state.tweets
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchTweets: () => {dispatch(fetchTweets())}, //tweetAction name
//     saveAllTweets: (tweets) => {dispatch({type: "SAVE_ALL_TWEETS", payload: tweets})}
//     }
//   }

export default TweetsTopics;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TweetsContainer);

// let tweets = this.props.tweets.tweets.map(tweet => {
//   return <TweetBody {...tweet} />;
// });