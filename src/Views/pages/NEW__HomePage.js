import React from 'react';
import { Link } from 'react-router-dom'
import Nav from "../components/Nav";
import { connect } from 'react-redux'

class HomePage extends React.Component {

  render() {
    console.log(this.props);
    return (<div></div>)
}
}
const mapStateToProps = (state) => {
return {
  tweets: state.tweets
}}
export default Homepage
// export default connect(mapStateToProps, null)(HomePage)
//
// <Route
//       path='/feed'
//       render={routerProps => <TweetsContainer tweetsList= {this.state.tweetsList} {...routerProps}  />} />
// <Route
//       path='/tags'
//       render={routerProps => <HashTagContainer tweetsList= {this.state.trendingHashtags} {...routerProps}  />}
//       />
