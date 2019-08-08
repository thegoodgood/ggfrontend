import React from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom'
import {updateCurrentUserAction} from '../../redux/actions/userAdapter'


class userSettingsContainer extends React.Component {

  state = {
    username: "",
    password: ""
  }

  componentDidMount() {
  if (localStorage.token) {
      this.setState({username: this.props.user.username})
  }
}

  handleChange = (event) => {
      this.setState({username: this.props.user.username})
      this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {

    event.preventDefault()
    this.props.updateCurrentUser(this.state.username, this.state.password, this.props.user.id)
      .then(()=> {
        this.props.history.push("/profile")
      })
  }


  render() {

    return (
      <div className = "userSettingsContainer">

    <div>
    <div><h1>User Settings</h1></div>
    <br/>
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="inline field">
          <label>Username</label>
          <input type="text" name="username" placeholder={this.props.user.username} onChange={this.handleChange} />
        </div>
        <div className="inline field">
        <label>Password</label>
        <input type="text" placeholder="Change Password" onChange={this.handlePassword} />
        </div>
        <button className="ui button" type="submit">Update User Settings</button>
      </form>
       </div>
       </div>
    )
  }
}


  const mapStateToProps = state => {
    return {
      user: state.user
    }
  }

  const mapDispatchToProps = {
    updateCurrentUser: updateCurrentUserAction
  }





  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(userSettingsContainer))
