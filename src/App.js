import "./App.css";
import "./views/containers/containers.css";
import "./views/components/components.css";

import React from "react";

import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD

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
=======
import Pages from "./views/pages";
import Nav from "./views/components/Nav";



const App = () => {
  return (
    <div>
      
      <Switch>
        <Route exact path="/signup"       component={Pages.SignupPage} />
        <Route exact path="/login"        component={Pages.LoginPage} />
        <Route exact path="/home"     component={Pages.HomePage} />
        <Route exact path="/profile"      component={Pages.ProfilePage} />
        <Route component={Pages.HomePage} />
      </Switch>
    </div>
  )
}

export default App;
>>>>>>> sundNight
