import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import TweetsContainer from "../containers/TweetsContainer";
import HashtagsContainer from "../containers/HashtagsContainer";
import ProfilePage from "./ProfilePage";
import TopicsContainer from "../containers/TweetsContainer";
import TopicsNav from "../components/TopicsNav";



class HomePage extends React.Component {

  render() {

    return (
      <div>

        <TopicsNav />
        <TweetsContainer />
        <HashtagsContainer />
      </div>
    );
  }
}

export default HomePage;
