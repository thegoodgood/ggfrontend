import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { connect } from "react-redux";
import TweetsContainer from "../containers/TweetsContainer";
import HashtagsContainer from "../containers/HashtagsContainer";
import ProfilePage from "./ProfilePage";
import TopicsContainer from "../containers/TweetsContainer";
import TweetTopics from "../components/TweetTopics";
// import Layouts from '../layouts'

class HomePage extends React.Component {

  render() {

    return (
      <div>
        <Nav />
        <ProfilePage />
        <TweetTopics />
        <TweetsContainer />
        <HashtagsContainer />
      </div>
    );
  }
}

export default HomePage;
// export default connect(mapStateToProps, null)(HomePage)

//       />
