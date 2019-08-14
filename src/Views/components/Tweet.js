import React from "react"
import Popup from "../components/Popup"
import { connect } from "react-redux"
import Moment from 'react-moment'
import { upvoteTweetAction, downvoteTweetAction,deleteTweetAction } from "../../redux/actions/tweetAdapter"
import ReactPlayer from 'react-player'
import Microlink from '@microlink/react'

class Tweet extends React.Component {
  handleClick = event => {
    if (this.props.setCurrentTweet) {
      this.props.setCurrentTweet(this.props)
    }
  }

    handleDelete = event => {
      this.props.deleteTweet(this.props)
    }

  render() {
    //     {(() => {
    //       if (this.props.extended_entities_obj && this.props.extended_entities_obj.media.type === "video" ) {
    //         return (<Microlink className="news other" url={this.props.extended_entities_obj.media.map(x=> x.video_info.variants[0].url)} />)
    //   } else if (this.props.media_obj && this.props.media_obj.type  === "photo") {
    //      if(this.props.extended_entities_obj && this.props.extended_entities_obj.media) {
    //        return (<Microlink className="news other" url={this.props.extended_entities_obj.media.map(x=> x.video_info.variants[0].url)} />)
    //      } else if(!this.props.extended_entities_obj){
    // return (<img className="media_url" src={this.props.media_obj.media_url} />)
    // }
    // }
    return (
      <div className="tweet-card" >

        <div className="votes">
        { !this.props.upvotedTweetsId.includes(this.props.id) ?
          <button
            className="upvote"
            onClick={() => {
              this.props.upvoteTweet(this.props.id)
            }} style={{background:"darkseagreen"}}
          >👍🏾</button>
          :
          <button
            className="downvote"
            onClick={() => {
              this.props.downvoteTweet(this.props.id)
            }}
          >👎🏾</button>
        }
        </div>

        <div onClick={this.handleClick}>
          <div className="outer-body">
            <img src={this.props.profile_img_url} />
            <div className="tweet-body" url={this.props.url}>
              <div className="tweet-row-one">
                <div className="name"> {this.props.user_name}</div>
                <div className="handle">@{this.props.handle}</div>
                <div className="created">Created <Moment fromNow>{this.props.created_at}</Moment></div>
              </div>
              <div className="tweet-content">{this.props.content}</div>

              {this.props.media_obj && this.props.media_obj.type  === "photo" ? <div><img className="media_url" src={this.props.media_obj.media_url} />
              </div> : null
          }

            {
              this.props.url_obj && !this.props.media_obj ? <div><Microlink className="news other" url={this.props.url_obj.expanded_url} size='large' />
            </div> : null
          }
            </div>
          </div>
        </div>

      {
        this.props.user.currentUser ?
          <button className="delete-btn" onClick = {this.handleDelete}>Delete Tweet </button>

        : null
      }
</div>
    )
  }
}

const mapStateToProps= (state) => {
  // console.log(state);
  return {
    upvotedTweetsId: state.user.upvoted_tweets.map(tweet=> tweet.id),
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
)(Tweet)
