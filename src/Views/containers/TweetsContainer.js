import React from "react";
import PropTypes from "prop-types";
import TweetBody from "../components/Tweet";
import {getTweetsAction,  getTopicTweetsAction, getNewsAction} from '../../redux/actions/tweetAdapter'
// import TopicTweetsContainer from '../containers/TopicTweetsContainer'

import {connect} from 'react-redux';

class TweetsContainer extends React.Component {

  componentDidMount() {
    this.props.getTweets()
      }

  render() {
    if (this.props.topic === "Social Commentary"){
      this.props.getTopic(this.props.topic)
    } else if (this.props.topic === "On the Daily") {
      this.props.getTopic(this.props.topic)
    }else if (this.props.topic === "News") {
      this.props.getNews()
}
    return (
       <div className="TweetsContainer" >
  {this.props.tweets.map(tweet => <TweetBody key={tweet.id} {...tweet}/>)}
</div>
    )
  }
}

  const mapStateToProps= state=> {

    return {
      tweets: state.tweets
    };
  };

  const mapDispatchToProps = {
    getTweets: getTweetsAction,
    getTopic: getTopicTweetsAction,
    getNews: getNewsAction
    }


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TweetsContainer);
