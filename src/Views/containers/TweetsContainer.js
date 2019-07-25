import React from "react";
import PropTypes from "prop-types";
import TweetBody from "../components/Tweet";
import {getTweetsAction} from '../../redux/actions/tweetAdapter'
import {connect} from 'react-redux';

class TweetsContainer extends React.Component {

  componentDidMount() {

    this.props.getTweets()
      }

  render() {
    console.log(this.props.tweets);
    let tweets = this.props.tweets.tweets.map(tweet => {
      return <TweetBody {...tweet} />;
    });

    return (
      <div className="TweetsContainer">
        {tweets}
       </div>
    )
  }
}

  const mapStateToProps= state=> {

    return {
      // getTweets: getTweetsAction
      tweets: state.tweets
    };
  };

  const mapDispatchToProps = {
      getTweets: getTweetsAction

    }


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TweetsContainer);

// let tweets = this.props.tweets.tweets.map(tweet => {
//   return <TweetBody {...tweet} />;
// });
