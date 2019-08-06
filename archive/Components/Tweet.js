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
      <img src={props.image} alt={"Profile pic"} className="picture">
      </img>
    )
  }

  const Handle = (props) => {
    return(
      <div className="handle">
        @{props.handle}
      </div>
    )
  }

  const Name = (props) => {
    console.log(props);
    return(
      <div className="name">
        {props.name}
      </div>
    )
  }

  const Content = (props) => {
    return(
      <div className="tweet">
        {props.content}stom
      </div>
    )
  }

  const Tweet = (props) => {

    return(
      <TweetBox>
        <div className="outer-body">
          <Image image={props.profile_img_url}/>
          <div className="body">
            <div className="inner-body">

              <Name name={props.user_name}/>
              <Handle handle={props.handle}/>

            </div>
            <div className="content">
            <Content content={props.content}/>
            </div>

          </div>
        </div>
      </TweetBox>
    )
  }

export default Tweet
