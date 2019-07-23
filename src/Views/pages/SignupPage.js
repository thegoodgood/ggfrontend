import React, { Component, PropTypes } from 'react';
<<<<<<< HEAD
import { connect } from "react-redux";
import { userLoginAction, userLogoutAction } from "../../redux/actions/userActions";
=======
import { connect } from 'react-redux'
import { userSignupAction, userLoginAction } from '../../redux/actions/userAdapter'
>>>>>>> sundNight

export class SignupPage extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    username: "",
    password: ""
  }

<<<<<<< HEAD
=======
  componentDidMount() {
  if (localStorage.token) {
    this.props.history.push("/home")
  }
}

>>>>>>> sundNight
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

<<<<<<< HEAD
  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(parsedResponse => {
      localStorage.setItem('token',parsedResponse.token )
      console.log(parsedResponse);
      this.props.history.push('/')
    })



  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="test" value={this.state.username} onChange={this.handleChange} name="username" />
        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
        <input type = "submit" value="Log in" />
=======
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signup(this.state.username, this.state.password)
      .then(()=> {
        this.props.history.push("/profile")
      })
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
        <input type = "submit" value="Sign up" />
>>>>>>> sundNight
      </form>
    );
  }
}

<<<<<<< HEAD
const mapDispatchToProps = dispatch => ({
  dispatchLogin: () => dispatch(userLoginAction())
});



  export default SignupPage;
=======
const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  signup: userSignupAction //() => dispatch(userSignupAction())
};



  export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
>>>>>>> sundNight
