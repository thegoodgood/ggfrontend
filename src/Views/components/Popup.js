import React from "react";
import PropTypes from "prop-types";
import Tweet from "../components/Tweet";
import TweetContainer from "../containers/TweetsContainer";
import {
  getTweetsAction,
  getTopicTweetsAction,
  getNewsAction
} from "../../redux/actions/tweetAdapter";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import TweetEmbed from "react-tweet-embed";

import { connect } from "react-redux";

class Popup extends React.Component {
  onToggle = event => {
    this.props.onToggle && this.props.onToggle(event);
  };

  render() {
    const tweet = this.props.currentTweet;
    return (
      <div id="tweet" onClick={event => {
        this.onToggle(event);
      }}>
        <Modal isOpen={true}>
          <TweetEmbed id={tweet.tweet_id} placeholder={"loading..."} />

          <button
            onClick={event => {
              this.onToggle(event);
            }}
          >
            close
          </button>
        </Modal>
      </div>
    );
  }
}

// <div className="embeddedTweet"   >
//  Hello
//  <TwitterTweetEmbed
//  tweetId={'1156297443648167937'}
//  />
// {this.props.children}
// <div>
//   <button> onClick = event =>{this.onClose(event)} close</button>
// </div>
const mapStateToProps = state => {
  return {
    tweets: state.tweets
  };
};

const mapDispatchToProps = {
  getTweets: getTweetsAction,
  getTopic: getTopicTweetsAction,
  getNews: getNewsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
