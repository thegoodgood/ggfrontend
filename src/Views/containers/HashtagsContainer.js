import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getHashtagsAction} from '../../redux/actions/hashtagAdapter'


class HashtagsContainer extends React.Component {

  componentDidMount() {
    this.props.getHashtags()
      }


  render() {

    return (
      <div className = "hashtagsContainer">
      <h2>Trending Topics</h2>
        {this.props.hashtags.map(hashtag => <p key={hashtag.id} className= "keyword">  {hashtag.keyword}</p>)}
       </div>
    )
  }

}


  const mapStateToProps = state => {
    return {
      hashtags: state.hashtags
    }
  }

  const mapDispatchToProps = {
    getHashtags: getHashtagsAction
  }




  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HashtagsContainer);
