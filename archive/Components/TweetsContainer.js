import React from 'react'
import PropTypes from 'prop-types'
import Tweet from './Tweet';

class TweetsContainer extends React.Component {

  state ={

  }

// <blockquote class="twitter-tweet"><p lang="en" dir="ltr">I am being tested right now and I hope I have grown enough emotionally to pass.</p>&mdash; jeremy bearimy (@crissles) <a href="https://twitter.com/crissles/status/1149528960373387265?ref_src=twsrc%5Etfw">July 12, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
//
// <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Whenever i feel down, i remember the crack goddess Tracie from love after lockup. At least I’m not her. 🤷🏾‍♀️wishing you the best 💜</p>&mdash; L’Oreal🥴 (@dearvalntine) <a href="https://twitter.com/dearvalntine/status/1149559119512080384?ref_src=twsrc%5Etfw">July 12, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  render() {
    let tweets = this.props.tweetsList.map(tweet=> {
      return <Tweet {...tweet} />
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
