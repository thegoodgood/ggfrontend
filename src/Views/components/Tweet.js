import React from "react";
import Popup from "../components/Popup";
import { connect } from 'react-redux'
import { upvoteTweetAction } from '../../redux/actions/tweetAdapter'

//Presentation components
// Are concerned with how things look
// Use props for displaying everything
// Do not manage state at all
// Don’t emit actions, but may take callbacks that do via props

class Tweet extends React.Component {
  handleClick = event => {
    this.props.setCurrentTweet(this.props);
  };
  render() {
    return (
      <div className="tweet-body" onClick={this.handleClick}>

      <div className="votes">
      <button className="upvote" onClick={()=> {this.props.onUpvote(this.props.id)}}>👍🏾</button>
      <button className="downvote" onClick={()=> {this.props.onUpvote(this.props.id)}}>👎🏾</button>

      </div>
<div>
        <div className="outer-body">
          <img src={this.props.profile_img_url} />
          <div className="body" url={this.props.url}>
            <div className="inner-body">
              <div className="name"> {this.props.user_name}</div>

              <div className="handle">@{this.props.handle}</div>
            </div>
            <div className="tweet content">{this.props.content}</div>

            <div>{this.props.entities} </div>
          </div>
        </div>
</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onUpvote: upvoteTweetAction
}

export default connect(null, mapDispatchToProps)(Tweet);
