import React from 'react'
import PropTypes from 'prop-types'

class Hashtag extends React.Component {

  render () {
console.log(this.props);
    return (
      <div className="hashtag">
        <p>#{this.props.keyword}</p>
      </div>
    );
  }
}

export default Hashtag;
