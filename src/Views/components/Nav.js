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
    console.log(this.props);
  }

  onLogout = () => {
    this.props.logout();
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        {this.props.user.id ? (
          //---------------WHAT A LOGGED IN USER SEES
          <div>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={this.onLogout}>Logout</button>
          </div>
        ) : (
          //---------------WHAT A GUEST SEES
          <div>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log in</Link>
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
