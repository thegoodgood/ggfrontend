import React from "react";
import PropTypes from "prop-types";
import TweetBody from "../components/Tweet";
import {fetchTweets} from '../../Redux/actions/tweetActions'
import {connect} from 'react-redux';

class TweetsContainer extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3000/tweets")
      .then(res => res.json())
      .then(tweets => this.props.saveAllTweets(tweets))
      }

  render() {
    // console.log(this.props.tweets);
    let tweets = this.props.tweets.tweets.map(tweet => {
      return <TweetBody {...tweet} />;
    });

    return (
      <div>
        {tweets}
       </div>
    )
  }
}

  function mapStateToProps(state, tweets) {
    return {
      tweets: state.tweets
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchTweets: () => {dispatch(fetchTweets())}, //tweetAction name
      saveAllTweets: (tweets) => {dispatch({type: "SAVE_ALL_TWEETS", payload: tweets})}
      }
    }


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TweetsContainer);

// let tweets = this.props.tweets.tweets.map(tweet => {
//   return <TweetBody {...tweet} />;
// });
