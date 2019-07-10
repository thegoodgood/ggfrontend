import React from 'react';
import { Link } from 'react-router-dom'
import HashTagContainer from './HashTagContainer'
import TweetsContainer from './TweetsContainer'
import Header from './Header';
import TweetBody from './Tweet';

class HomePage extends React.Component {

  render() {
    // console.log(this.props.hashtagList)
    return (
      <div className="App">

    <Header />
    <div className="sidebar">
      
      <HashTagContainer  hashtagList={this.props.hashtagList} />
    </div>

    <div className="main">
      <TweetsContainer tweetsList= {this.props.tweetsList} hashtagList={this.props.hashtagList} />
    </div>


  </div>
    )
  }
}
export default HomePage
//
// <Route
//       path='/feed'
//       render={routerProps => <TweetsContainer tweetsList= {this.state.tweetsList} {...routerProps}  />} />
// <Route
//       path='/tags'
//       render={routerProps => <HashTagContainer tweetsList= {this.state.trendingHashtags} {...routerProps}  />}
//       />
