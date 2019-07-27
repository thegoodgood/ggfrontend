import React from 'react';
import Nav from "../components/Nav";
import { connect } from 'react-redux'
import {withRouter } from 'react-router-dom'
import {getCurrentUserAction } from "../../redux/actions/userAdapter.js"
import withAuth from '../../redux/hocs/withAuth'




class ProfilePage extends React.Component {

  // componentDidMount() {
  //   if (localStorage.token) {
  //     console.log("found a token");
  //     console.log(this.props.currentUser);
  //     console.log(this.props);
  //   }
  // }

  handleClick = e=> {
    let c = this.props.getCurrentUser(this.props.user)
    console.log(c);
    // console.log(this.props.currentUser);
  }

 render(){

    return (
      <div>
      <h1> {this.props.currentUser ? `hello ${this.props.username}` : 'Getting your profile...'} </h1>

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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     add_one: (num) => dispatch({type: "ADD_ONE", payload: num})
//   }
// }
// {
//   currentUser: getCurrentUserAction
// }

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage)))
