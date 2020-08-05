import React from 'react'

import { connect } from 'react-redux'
import { userLogoutAction } from '../../redux/actions/userAdapter'

class LogoutPage extends React.Component {


  componentDidMount() {
    if ( localStorage.token ) {
      this.props.logout()
      localStorage.clear()
      this.props.history.push( "/home" )
    }
  }
  render() {

    return (
      <div></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // logout: state.userLogoutAction
  }
}

const mapDispatchToProps = {
  logout: state.userLogoutAction
}

export default connect( mapStateToProps, mapDispatchToProps )( LogoutPage )
