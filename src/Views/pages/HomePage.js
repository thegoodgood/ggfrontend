import React from "react"

import { withRouter } from 'react-router-dom'
import TweetsContainer from "../containers/TweetsContainer"

import HashtagsContainer from "../containers/HashtagsContainer"
import TopicsNav from "../components/TopicsNav"



class HomePage extends React.Component {


  render() {

    return (
      <div className="homePage">

        <TopicsNav />
        <TweetsContainer />
        <HashtagsContainer />
      </div>
    )
  }
}

export default withRouter( HomePage )
