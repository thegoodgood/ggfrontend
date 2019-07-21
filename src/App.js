import "./App.css";

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Switch, Route } from "react-router-dom";
import Pages from "./Views/pages";
import HomePage from "./Views/pages/HomePage";
import LoginPage from "./Views/pages/LoginPage";
import Nav from "./Views/components/Nav";
import TweetTopics from "./Views/components/TweetTopics";
import Header from "./Views/components/Header.js";

// const App = props => {
class App extends React.Component {
  state = {
    page: 'login'
  }
  redirect = page => {
    this.setState({ page: page})
  }
componentDidMount() {
  console.log(localStorage.token);
  if(localStorage.token) {
    this.redirect('home')
  }
}

  render() {
    switch(this.state.page) {
      case 'login':
      return <LoginPage redirect={this.redirect} />

    case 'home':
    return <HomePage />
  }
  return (
    <Fragment>

      <Nav />

      <TweetTopics />



    </Fragment>
  )
}
}

// const mapStateToProps = state => {
//   return ({
//     tweets: state.tweets.tweets,
//     // currentUser: state.user
//   })
//   // state.currentUser
// };

export default App;
// export default connect(mapStateToProps, null)(App);

// <Fragment>
// <Link to = '/'>Home</Link>
// <Link to = '/signup'>Sign Up</Link>
// <Link to = '/login'>Log in</Link>

// </Fragment>)
