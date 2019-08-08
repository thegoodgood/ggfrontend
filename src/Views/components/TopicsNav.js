import React from "react";
import Tweet from "../components/Tweet";
import { withRouter } from "react-router-dom";

import {
  getTopicAction,
  getTopicTweetsAction
} from "../../redux/actions/tweetAdapter";
import { getTopic } from "../../redux/actions/topicActions";
import { connect } from "react-redux";

class TopicsNav extends React.Component {
  componentDidMount() {
    this.props.setTopic("home");
  }

  handleClick = event => {
    this.props.setTopic(event.target.innerText);
    this.props.getTopicTweets(event.target.innerText);
  };

  goHome = (event) => {
    const { history } = this.props;
    if(history) history.push('/');
    console.log(history);
  }

  render() {
    return (
      <div className="topicsNav">
        <button onClick={this.handleClick}> News</button>
        <button onClick={this.handleClick}>Social Commentary</button>
        <button onClick={this.handleClick}>On the Daily</button>
        <button onClick={this.goHome}>All Tweets</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    topic: state.topic
  };
};

const mapDispatchToProps = {
  setTopic: getTopicAction,
  getTopicTweets: getTopicTweetsAction
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsNav));
