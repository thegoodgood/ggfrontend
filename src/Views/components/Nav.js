import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { userLogoutAction } from '../../Redux/actions/UserActions';

const Nav = props => {

  const handleLogout = () => {
    localStorage.clear();
    props.dispatchLogout();
  };

  handleLogin =() => {

  }
}

    const userNav = () => {
      return(
      <Fragment>
        <Link to = '/'>Home</Link>
        <Link to = '/profile'>Profile</Link>
        <Link to = '/' onClick={handleLogout}>Log out</Link>
      </Fragment>
    )}

    const guestNav = () => {
      return (<Fragment>
      <Link to = '/'>Home</Link>
      <Link to = '/signup'>Sign Up</Link>
      <Link to = '/login'>Log in</Link>
    </Fragment>)
    }

const mapStateToProps = state => state.currentUser;

    const mapDispatchToProps = dispatch => ({
    dispatchLogout: () => dispatch(userLogoutAction()),
  });

    return(<nav id = "main-nav">
      {props.username ? userNav : guestNav}
      </nav>)
  }

}

export default connect( mapStateToProps, mapDispatchToProps)(Nav);
