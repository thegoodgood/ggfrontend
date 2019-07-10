import React from 'react';
import logo from './logo.svg';
import './App.css';
import HasTagContainer from './containers/HashTagContainer'
import TweetsContainer from './containers/TweetsContainer'
import Header from './components/Header';

class App extends React.Component {

state = {
  tweetsList: [],
  trendingHashtags: []

}

componentDidMount() {

  //---------------------------------fetch tweets
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    this.setState({tweetsList: data})
  })



//-------------------------fetch trending hashtags


fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
  this.setState({trendingHashtags: data})
})
}
/*
// <header className="App-header">
//   <img src={"https://i.pinimg.com/236x/8a/7c/be/8a7cbe603b6522b70f076c08d8ba3f50--boomerang-cartoon-network-powerpuff-girls.jpg"} className="App-logo" alt="logo" />
// </header> */


render() {
  return (
    <div className="App">

        <Header />
      <div>
      <h1>Trending Topics</h1>
      <HasTagContainer className="sidebar" hashtagList={this.state.trendingHashtags} />

      <div className="main">
      <TweetsContainer tweetsList= {this.state.tweetsList} />
      </div>

</div>
    </div>
  );
  }
}
export default App;
