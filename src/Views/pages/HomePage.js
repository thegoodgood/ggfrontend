import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import TweetsContainer from "../containers/TweetsContainer";
import HashtagsContainer from "../containers/HashtagsContainer";
import ProfilePage from "./ProfilePage";
import TopicsContainer from "../containers/TweetsContainer";
import TweetTopics from "../components/TweetTopics";



class HomePage extends React.Component {

  render() {

    return (
      <div>


        <TweetTopics />
        <TweetsContainer />
        <HashtagsContainer />
      </div>
    );
  }
}

export default HomePage;
