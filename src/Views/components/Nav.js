import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogoutAction } from "../../Redux/actions/userActions";

const Nav = props => {
  console.log(props);
  const handleLogout = () => {
    props.dispatchLogout();
  };

  const handleLogin = () => {};
  return <nav id="main-nav">{props.username ? userNav : guestNav}</nav>;
};

const userNav = props => {
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

const guestNav = props => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log in</Link>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    tweets: state.tweets.tweets,
    currentUser: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => dispatch(userLogoutAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
