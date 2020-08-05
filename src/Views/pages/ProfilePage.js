import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUserAction } from "../../redux/actions/userAdapter.js";
import withAuth from "../../redux/hocs/withAuth";
import UpvotedTweetsContainer from "../containers/UpvotedTweetsContainer";

import UserSettingsContainer from "../containers/UserSettingsContainer";
import TopicsNav from "../components/TopicsNav";

class ProfilePage extends React.Component {
  render() {
    console.log( this.props )
    return (
      <div className="profilePage">
        {this.props.currentUser ? (
          <div>
            <h3>Welcome back {this.props.currentUser.username}!</h3>

            <TopicsNav />
            <UpvotedTweetsContainer />
            <UserSettingsContainer />
          </div>
        ) : (
            <h1> Getting your profile... </h1>
          )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log( state )
  return {
    user: state.user,
    currentUser: state.user.current_user
  }
}

const mapDispatchToProps = () => {
  return {
    getCurrentUser: getCurrentUserAction
  }
}

export default withAuth(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )( withRouter( ProfilePage ) )
)
