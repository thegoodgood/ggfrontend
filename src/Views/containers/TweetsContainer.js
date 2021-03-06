import React from "react";
import Tweet from "../components/Tweet"
import Popup from "../components/Popup";
import { getTweetsAction, getTopicTweetsAction, getNewsAction } from '../../redux/actions/tweetAdapter'


import { connect } from 'react-redux';

class TweetsContainer extends React.Component {

  state = {
    currentTweet: {},
    show: false
  }

  onToggle = ( event ) => {

    this.setState( {
      ...this.state, show: !this.state.show
    } )

  }

  setTweet = ( tweet ) => {
    this.setState( { ...this.state, show: !this.state.show } )
    this.setState( { currentTweet: tweet } )
  }

  componentDidMount() {
    this.props.getTweets()
  }

  render() {

    return (
      <div className="TweetsContainer">
        {this.props.tweets.map( tweet => <Tweet setCurrentTweet={this.setTweet}
          key={tweet.id} currentTweet={this.state.currentTweet} {...tweet} />
        )}
        {this.state.show ?
          <Popup
            {...this.state} currentTweet={this.state.currentTweet} onToggle={this.onToggle} />
          :
          null

        }
      </div>
    )
  }
}

const mapStateToProps = state => {
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
)( TweetsContainer );
