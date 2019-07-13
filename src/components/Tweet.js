import React from 'react'


  const TweetBox = (props) => {
    console.log(props);
    return(
      <div className="tweet-body">
        {props.children}
      </div>
    )
  }

  const Image = (props) => {
    return(
      <img src={props.profile_image_url} alt="Profile pic" className="picture">
      </img>
    )
  }

  const Handle = (props) => {
    return(
      <div className="handle">
        {props.handle}
      </div>
    )
  }

  const Name = (props) => {
    return(
      <div className="name">
        {props.name}
      </div>
    )
  }

  const Content = (props) => {
    return(
      <div className="tweet">
        {props.content}
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
            <Content content={props.content}/>
          </div>
        </div>
      </TweetBox>
    )
  }

export default TweetBody
