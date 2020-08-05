import React from "react";
import { withRouter } from "react-router-dom";

import {
  getTopicAction,
  getTopicTweetsAction,
} from "../../redux/actions/tweetAdapter";
import { connect } from "react-redux";

class TopicsNav extends React.Component {
  componentDidMount() {
    this.props.setTopic("home");
  }

  handleClick = (event) => {
    this.props.setTopic(event.target.innerText);
    this.props.getTopicTweets(event.target.innerText);
  };

  goHome = () => {
    const { history } = this.props;
    if (history) history.push("/");
  };

  render() {
    return (
      <div className='topicsNav'>
        {/* <button onClick={this.handleClick}> News</button> */}
        <button onClick={this.handleClick}>Social Commentary</button>
        <button onClick={this.handleClick}>On the Daily</button>
        <button className='all-tweets' onClick={this.goHome}>
          All Tweets
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    topic: state.topic,
  };
};

const mapDispatchToProps = {
  setTopic: getTopicAction,
  getTopicTweets: getTopicTweetsAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopicsNav)
);
