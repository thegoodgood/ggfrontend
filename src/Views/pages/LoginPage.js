import React, { Component, PropTypes } from 'react';
<<<<<<< HEAD
import { connect } from "react-redux";
import { userLoginAction, userLogoutAction } from "../../redux/actions/userActions";

/**
 * LoginPage
 */
export class LoginPage extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    username: "",
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
      this.props.history.push('/')
    })



  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="test" value={this.state.username} onChange={this.handleChange} name="username" />
        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
        <input type = "submit" value="Log in" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchLogin: () => dispatch(userLoginAction())
});



  export default LoginPage;
=======
import { connect } from 'react-redux'
import { userLoginAction } from '../../redux/actions/userAdapter'

 class LoginPage extends React.Component {
   state = {
     username: '',
     password: ''
   }

   componentDidMount() {
     if (localStorage.token) {
       this.props.history.push("/home")
     }
   }

   handleSubmit = (e) => {
     console.log(this.props);
     e.preventDefault()
     this.props.login(this.state.username, this.state.password)
       .then(()=> {
         this.props.history.push("/profile")
       })
   }

   handleChange = (e) => {
     this.setState({ [e.target.name]: e.target.value })
   }

   render() {
     console.log(this.state);
     return (
       <form onSubmit={this.handleSubmit}>
         <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
         <input type="text" value={this.state.password} onChange={this.handleChange} name="password" />
         <input type="submit" value="Log in!" />
       </form>
     );
   }
 }

 const mapStateToProps = state => {
   // console.log(state);
   return {
     user: state.currentUser
   }
 }

 const mapDispatchToProps = {
     login: userLoginAction
 }

 export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
>>>>>>> sundNight
