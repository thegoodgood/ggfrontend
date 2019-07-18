import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Pages from './Views/pages'
import HomePage from "./Components/HomePage";

import Nav from "./Views/components/Nav";

class App extends React.Component {


  state = {
    tweetsList: [],
    trendingHashtags: [],
    username: ""
  };

componentDidMount() {
  const {tweets, hashtags } = this.props
}
  render() {
    console.log(this.state);
    return (
      <Switch>
        <Route path="/signup" component={null} />
        <Route path="/profile" component={null} />
        <Route
          exact
          path="/"
          render={routerProps => (
            <HomePage
              {...routerProps}
              tweetsList={this.state.tweetsList}
              hashtagList={this.state.trendingHashtags}
            />
          )}
        />
      </Switch>
    );
  }
}
export default App;

/*
// <header className="App-header">
//   <img src={"https://i.pinimg.com/236x/8a/7c/be/8a7cbe603b6522b70f076c08d8ba3f50--boomerang-cartoon-network-powerpuff-girls.jpg"} className="App-logo" alt="logo" />
// </header> */

// <Route component={FourOhFourPage} />
