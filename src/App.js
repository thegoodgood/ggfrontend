import "./App.css";
import "./Views/containers/containers.css";
import "./Views/components/components.css";

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Switch, Route } from "react-router-dom";

import Pages from "./Views/pages";
import HomePage from "./Views/pages/HomePage";
import LoginPage from "./Views/pages/LoginPage";
import SignupPage from "./Views/pages/SignupPage";
import Nav from "./Views/components/Nav";
import TweetTopics from "./Views/components/TweetTopics";
import HashtagsContainer from "./Views/containers/HashtagsContainer";
import Header from "./Views/components/Header.js";


class App extends React.Component {
  state = {
    page: "login"
  };

  redirect = page => {
    this.setState({ page: page });
  };
  componentDidMount() {
    // console.log(localStorage.token);

    if (!localStorage.token) {
      this.redirect("home");
    }
  }



  render() {

    return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/profile" render={(routerProps) => <HomePage {...routerProps} user={this.state.user}/>} />
      <Route path="/" render={(routerProps) => <HomePage {...routerProps} user={this.state.user}/>} />

    </Switch>
  )

}
}


export default App
