import React, { Component } from "react"

import { connect } from "react-redux"
import {
  userSignupAction,
  userLoginAction,
  getCurrentUserAction
} from "../../redux/actions/userAdapter"

class SignupPage extends Component {
  state = {
    username: "",
    password: ""
  }

  componentDidMount() {
    // if (!!localStorage.token) {
    //   const { history } = this.props
    //   history.push('/login')
    // }
  }

  handleChange = event => {
    this.setState( { [ event.target.name ]: event.target.value } )
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.signup( this.state.username, this.state.password )
      .then( () => {
        if ( this.props.user ) {
          this.props.login( this.state.username, this.state.password )
            .then( () => {
              const { history } = this.props
              history.push( "/" )
            } )
        }
      } )
  }

  render() {
    console.log( this.props.user )
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
          name="username"
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          name="password"
        />
        <input type="submit" value="Sign up" />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  signup: userSignupAction, //() => dispatch(userSignupAction())
  getCurrentUser: getCurrentUserAction,
  login: userLoginAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( SignupPage )
