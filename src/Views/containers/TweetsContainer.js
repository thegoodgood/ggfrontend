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
    return (
       <div className="TweetsContainer">
  {this.props.tweets.map(tweet => <TweetBody key={tweet.id} {...tweet}/>)}
</div>
    )
  }
}

  const mapStateToProps= state=> {
console.log(state.tweets);
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
