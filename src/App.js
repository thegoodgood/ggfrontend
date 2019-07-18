import "./App.css";

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

import { Switch, Route } from "react-router-dom";
import Pages from './Views/pages'
import HomePage from "./Views/pages/HomePage";
import Nav from "./Views/components/Nav";

const App = props => {
console.log(props);
      return (
      < HomePage />
    )
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
