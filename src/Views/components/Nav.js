
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  userLoginAction,
  userLogoutAction,
  getCurrentUserAction
} from "../../redux/actions/userActions";

class Nav extends Component {
  componentDidMount() {
    this.props.setCurrentUser();
  }

  onLogout = () => {
    localStorage.clear()
    this.props.logout();
    const { history } = this.props;
    if(history) history.push('/home');
  };

  render() {
    return (
      <div className="nav">
        {!!localStorage.token ? (
          //---------------WHAT A LOGGED IN USER SEES
          <div>
          <Link to="" className="logout" onClick={this.onLogout}>Logout</Link>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>

          </div>
        ) : (
          //---------------WHAT A GUEST SEES
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login" className="login" >Log in</Link>
          </div>
        )}
      </div>
    );
  }
}

//------------------------HANDLE STATE/ STORE

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  setCurrentUser: getCurrentUserAction,
  logout: userLogoutAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
