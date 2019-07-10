import React from 'react'

  const TweetBox = (props) => {
    return(
      <div className="tweet-body">
        {props.children}
      </div>
    )
  }

  const Image = (props) => {
    return(
      <img src={"https://via.placeholder.com/50"} alt="Logo" className="picture">
      </img>
    )
  }

  const Handle = (props) => {
    return(
      <div className="handle">
        @twitter_handle
      </div>
    )
  }

  const Name = (props) => {
    return(
      <div className="name">
        myusername
      </div>
    )
  }

  const Tweet = (props) => {
    console.log(props);
    return(
      <div className="tweet">
        {props.tweet.body}
      </div>
    )
  }

  const TweetBody = (props) => {
    return(
      <TweetBox>
        <div className="inner-body">
          <Image image={props.image}/>
          <div className="body">
            <div className="inner-body">
              <Name name={props.name}/>
              <Handle handle={props.handle}/>
            </div>
            <Tweet tweet={props.tweet}/>
          </div>
        </div>
      </TweetBox>
    )
  }

export default TweetBody
