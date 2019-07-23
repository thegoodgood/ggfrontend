import React, { Component, PropTypes } from 'react';
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
