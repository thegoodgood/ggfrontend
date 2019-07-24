import React from 'react';
import Nav from "../components/Nav";
import { connect } from 'react-redux'
import {withRouter } from 'react-router-dom'
import {getCurrentUserAction } from "../../redux/actions/userAdapter.js"
import withAuth from '../../redux/hocs/withAuth'




class ProfilePage extends React.Component {


 render(){
   console.log(this.props.username);

    return (
      <div>
      <h1> {this.props.username ? "hello" : 'Getting your profile...'} </h1>

    </div>
  )
  }
}


const mapStateToProps = state => {
  console.log(state.user.username);
  // TODO: why is it state.user.username here and not state.username or state.currentUser
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = {
  currentUser: getCurrentUserAction
}

export default withAuth(connect(mapStateToProps, null)(withRouter(ProfilePage)))
