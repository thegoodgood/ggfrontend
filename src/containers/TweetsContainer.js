import React from 'react'
import PropTypes from 'prop-types'
import Tweet from '../components/Tweet';

class TweetsContainer extends React.Component {

  render () {
    let tweets = this.props.tweetsList.map(tweet=> (
      <Tweet key={tweet.id} tweet={tweet} />
    ))
    return (
      <div className="tweets-container">

      {
        tweets
      }

      </div>
    );


  }
}

export default TweetsContainer;
