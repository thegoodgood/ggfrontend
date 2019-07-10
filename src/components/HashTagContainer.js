
import React from 'react'
import PropTypes from 'prop-types'
import Hashtag from './Hashtag';

class HashTagContainer extends React.Component {

    render() {

      // console.log(this.props);
      let hashtags = this.props.hashtagList.map(hashtag=> (
        <Hashtag key={hashtag.id} hashtag={hashtag} />
        ))

      return (
        <div>
          <h3>Trending Topics</h3>
          {
            hashtags
          }

        </div>
      );
    }

}

export default HashTagContainer;
