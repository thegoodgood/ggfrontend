import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header.js';
import Footer from './Footer';
import TweetBody from './Tweet';
import Nav from "../Views/components/Nav";

class HomePage extends React.Component {

  render() {
    // console.log(this.props.hashtagList)
    return (

    <div className="App">
<Nav />
    <div className="grid">

    <div className="item">
      <Header />
    </div>

    <div className="item feed">
      <TweetsContainer tweetsList= {this.props.tweetsList} hashtagList={this.props.hashtagList} />
    </div>

    <div className="item sidebar">

      <HashTagContainer  hashtagList={this.props.hashtagList} />
    </div>

    <div className="item">
    <Footer />
    </div>
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
