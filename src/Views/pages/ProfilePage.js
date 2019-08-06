import React from 'react';
import Nav from "../components/Nav";
import { connect } from 'react-redux'
import {withRouter } from 'react-router-dom'
import {getCurrentUserAction } from "../../redux/actions/userAdapter.js"
import withAuth from '../../redux/hocs/withAuth'
import Tweet from '../components/Tweet'

class ProfilePage extends React.Component {

  handleClick = e=> {
    let c = this.props.getCurrentUser(this.props.user)
    console.log(c);

  }

 render(){
   return (
     <div>
      <h1> {this.props.currentUser ? `hello ${this.props.user.username}` : 'Getting your profile...'} </h1>
     </div>
   )
 }
}


const mapStateToProps = state => {
  return {
    user: state.user,
    username: state.user.username,
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: getCurrentUserAction
  }
}


export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage)))
