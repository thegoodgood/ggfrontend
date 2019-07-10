import React from 'react'
import PropTypes from 'prop-types'

class Tweet extends React.Component {

  render () {

    return (
      <div className="hashtag">
        <h3>{this.props.hashtag.username}</h3>

      </div>
    );
  }
}

export default Tweet;
