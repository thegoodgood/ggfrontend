import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { connect } from "react-redux";
import TweetsContainer from "../containers/TweetsContainer";
import HashtagsContainer from "../containers/HashtagsContainer";
import ProfilePage from "./ProfilePage";
import TopicsContainer from "../containers/TweetsContainer";
import TweetTopics from "../components/TweetTopics";
import Header from "../components/Header";


class HomePage extends React.Component {

  render() {
<<<<<<< HEAD

=======
    
    console.log(this.props);
>>>>>>> sundNight
    return (
      <div>
        <Header />
        <Nav/>
        <TweetTopics />
        <TweetsContainer />
        <HashtagsContainer />
      </div>
    );
  }
}

export default HomePage;
