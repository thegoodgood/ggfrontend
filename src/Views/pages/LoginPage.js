import React, { Component, PropTypes } from 'react';

/**
 * LoginPage
 */
export class LoginPage extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    name: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

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
      this.props.redirect('home')
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="test" value={this.state.username} onChange={this.handleChange} name="name" />
        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
        <input type = "submit" value="Log in" />
      </form>
    );
  }
}


export default LoginPage;
