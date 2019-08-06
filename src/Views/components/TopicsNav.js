import React from "react";
import PropTypes from "prop-types";
import Tweet from "../components/Tweet";

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

  render() {
    return (
      <div className="topicsNav">
        <button onClick={this.handleClick}> News</button>
        <button onClick={this.handleClick}>Social Commentary</button>
        <button onClick={this.handleClick}>On the Daily</button>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsNav);
