import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux'
import { userSignupAction, userLoginAction } from '../../redux/actions/userAdapter'


export class SignupPage extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    username: "",
    password: ""
  }


  componentDidMount() {
  if (localStorage.token) {
    this.props.history.push("/home")
  }
}


  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }


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
      </form>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  signup: userSignupAction //() => dispatch(userSignupAction())
};



  export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
