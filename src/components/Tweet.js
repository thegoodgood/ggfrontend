import React from 'react'
import PropTypes from 'prop-types'

class Tweet extends React.Component {

  render () {

    return (
      <div className="tweet">
        <h3>{this.props.tweet.title}</h3>
        <p>{this.props.tweet.body}</p>

      </div>
    );
  }
}

export default Tweet;
