import React from "react";
import { connect } from 'react-redux';
import { getHashtagsAction, getHashtagSearchAction } from '../../redux/actions/hashtagAdapter'


class HashtagsContainer extends React.Component {

  componentDidMount() {
    this.props.getHashtags()
  }

  handleClick = event => {
    this.props.getHashtagSearch( event.target.innerText )
  }

  render() {

    return (
      <div className="hashtagsContainer">
        <h2>Trending Topics</h2>
        {this.props.hashtags.map( hashtag => <p onClick={this.handleClick} key={hashtag.id} className="keyword">#{hashtag.keyword}</p> )}
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log( state )
  return {
    hashtags: state.hashtags
  }
}

const mapDispatchToProps = {
  getHashtags: getHashtagsAction,
  getHashtagSearch: getHashtagSearchAction
}





export default connect(
  mapStateToProps,
  mapDispatchToProps
)( HashtagsContainer );
