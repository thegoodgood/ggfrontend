import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLoginAction, userLogoutAction } from "../../redux/actions/userActions";

const Nav = props => {
  const handleLogout = () => {
    props.dispatchLogout();
    localStorage.clear()
  };

  const handleLogin = () => {};
  return <nav id="main-nav">{props.username ? userNav() : guestNav()}</nav>;
};

//---------------WHAT A LOGGED IN USER SEES
const userNav = props => {
  console.log(this.props);
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/" onClick={props.handleLogout}>
        Log out
      </Link>
    </Fragment>
  );
};

//---------------WHAT A GUEST SEES
const guestNav = props => {
  return (
    <Fragment className="nav" >
      <Link to="/" >Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log in</Link>
    </Fragment>
  );
};

//------------------------HANDLE STATE/ STORE

const mapStateToProps = state => {
  return {
    tweets: state.tweets.tweets,
    currentUser: state.usersername
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => dispatch(userLogoutAction()),
  dispatchLogin: () => dispatch(userLoginAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
