import React from 'react';
import Nav from "../components/Nav";
import { connect } from 'react-redux'
import {withRouter } from 'react-router-dom'
import {getCurrentUserAction } from "../../redux/actions/userAdapter.js"
import withAuth from '../../redux/hocs/withAuth'
import Tweet from '../components/Tweet'
import Popup from "../components/Popup"
import UpvotedTweetsContainer from '../containers/UpvotedTweetsContainer'

import HashtagsContainer from "../containers/HashtagsContainer";
import TopicsContainer from "../containers/TweetsContainer";
import TopicsNav from "../components/TopicsNav";



class ProfilePage extends React.Component {

  handleClick = e=> {
    this.props.getCurrentUser(this.props.user)
  }

 render(){
   return (
     <div className= "profilePage">

      {this.props.currentUser ?
        (
        <div><h1>Hello, {this.props.user.username}</h1>

        <TopicsNav />
        <UpvotedTweetsContainer  />
        <HashtagsContainer />
        </div>
)
      :

(

      <h1> Getting your profile... </h1>

   )}
   </div>

 )}

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
    getCurrentUser: getCurrentUserAction,

  }
}


export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage)))
