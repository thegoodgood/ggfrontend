import React from "react";
import PropTypes from "prop-types";
import TweetBody from "../components/Tweet";
import TweetContainer from "../containers/TweetsContainer"
import {getTweetsAction,  getTopicTweetsAction, getNewsAction} from '../../redux/actions/tweetAdapter'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import TweetEmbed from 'react-tweet-embed'
import {connect} from 'react-redux';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton,TwitterTweetEmbed} from 'react-twitter-embed'
import EmbedContainer from 'react-oembed-container'

import { Tweet, Timeline } from 'react-twitter-widgets'


class Popup extends React.Component {

  state = {
    modal: true
}

// componentLoad() {
//   // const twttr = window.twttr
//   // twttr.widgets.load()
//   // twttr.onload =() => {
//   //   console.log("hello");
//   //   twttr.widgets.load()
// }
// }
  // componentDidMount() {
  //   this.props.getTweets()
  //     }
  // onClose = event => {
  //   this.props.onClose && this.props.onClose(event)


  onToggle = event => {

    this.props.onToggle && this.props.onToggle(event)

  }

  render() {

    const tweet = this.props.currentTweet



    console.log(tweet.content);
    return (
        <div id = "tweet" >

           <Modal isOpen={this.state.modal} >
           <Timeline
               dataSource={{
                 sourceType: 'profile',
                 screenName: 'twitterdev'
               }}
               options={{
                 username: 'TwitterDev',
                 height: '400'
               }}
               onLoad={() => console.log('Timeline is loaded!')}
             />
           <button onClick={event=> {this.onToggle(event)}}>
            close
            </button>
           </Modal>
         </div>

    )
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
  const mapStateToProps= state=> {

    return {
      tweets: state.tweets
    };
  };

  const mapDispatchToProps = {
    getTweets: getTweetsAction,
    getTopic: getTopicTweetsAction,
    getNews: getNewsAction,

    }


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Popup);
