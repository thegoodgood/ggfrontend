
import React from 'react'
import PropTypes from 'prop-types'
import Hashtag from '../components/Hashtag';

class HashTagContainer extends React.Component {

    render() {
      let hashtags = this.props.hashtagList.map(hashtag=> (
        <Hashtag key={hashtag.id} hashtag={hashtag} />
        ))

      return (
        <div>
          {
            hashtags
          }

        </div>
      );
    }

}

export default HashTagContainer;
