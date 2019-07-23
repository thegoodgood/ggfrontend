
import React from 'react'
import PropTypes from 'prop-types'
import Hashtag from './Hashtag';

class HashTagContainer extends React.Component {

    render() {


      let hashtags = this.props.hashtagList.map(hashtag=> (
        <Hashtag key={hashtag.id} {...hashtag} />
        ))

      return (
        <div>
          <h4>Trending Hashtags</h4>
          {
            hashtags
          }

        </div>
      );
    }

}

export default HashTagContainer;
