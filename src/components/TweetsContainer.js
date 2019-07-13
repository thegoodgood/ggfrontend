import React from 'react'
import PropTypes from 'prop-types'
import TweetBody from './Tweet';

class TweetsContainer extends React.Component {

  state ={

  }

  render() {
    let tweets = this.props.tweetsList.map(tweet=> {
      console.log(tweet)
      return <TweetBody key={tweet.id} {...tweet} />
    })
    // console.log(this.props);
    return (

      <div className="feed">

      {
        tweets
      }

      </div>
    );


  }
}

export default TweetsContainer;
