/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import { connect } from "react-redux"
import Moment from 'react-moment'
import { upvoteTweetAction, downvoteTweetAction, deleteTweetAction } from "../../redux/actions/tweetAdapter"
import ReactPlayer from 'react-player'
import Microlink from '@microlink/react'

class Tweet extends React.Component {
  handleClick = event => {
    if ( this.props.setCurrentTweet ) {
      this.props.setCurrentTweet( this.props )
    }
  }

  handleDelete = event => {
    this.props.deleteTweet( this.props )
  }


  render() {

    return (
      <div className="tweet-card grid" >

        <img className="profile-pic" src={this.props.profile_img_url} />
        <div onClick={this.handleClick}>
          <div className="outer-body">

            <div className="col-2 tweet-body" url={this.props.url}>
              <div className="tweet-row-one">
                <div className="name"> {this.props.user_name}</div>
                <div className="handle">@{this.props.handle}</div>
                <div className="created">Created <Moment fromNow>{this.props.created_at}</Moment></div>
              </div>
              <div className="tweet-content">{this.props.content}</div>
              <div className="media">
                {this.props.media_obj && this.props.media_obj.type === "photo" ? <img className="media_url" src={this.props.media_obj.media_url} />
                  : null
                }

                {
                  this.props.url_obj && !this.props.media_obj ? <div><Microlink className="news other" url={this.props.url_obj.expanded_url} size='large' />
                  </div> : null
                }
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="votes">
            {!this.props.upvotedTweetsId.includes( this.props.id ) ?
              <button
                className="upvote"
                onClick={() => {
                  this.props.upvoteTweet( this.props.id )
                }} style={{ background: "darkseagreen" }}
              >👍🏾</button>
              :
              <button
                className="downvote"
                onClick={() => {
                  this.props.downvoteTweet( this.props.id )
                }}
              >👎🏾</button>
            }
          </div>
          {
            this.props.user.currentUser ?
              <button className="delete-btn" onClick={this.handleDelete}>Delete Tweet </button>

              : null
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    upvotedTweetsId: state.user.current_user.upvoted_tweets.map( tweet => tweet.id ),
    user: state.user
  }
}

const mapDispatchToProps = {
  upvoteTweet: upvoteTweetAction,
  downvoteTweet: downvoteTweetAction,
  deleteTweet: deleteTweetAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Tweet )
