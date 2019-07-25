import React from 'react';
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom'
import {getCurrentUserAction} from '../actions/userAdapter'

export default function withAuth(WrappedComponent) {
  class Something extends React.Component {
    componentDidMount() {
      if (!localStorage.token) {
        this.props.history.push("/login")
      }
      try {
        this.props.setCurrentUser()
        .catch(error => {
          this.props.history.push("/login")
        })
      } catch (error) {
        if (error.message === "Please log in") {
          this.props.history.push("/login")
        }
      }
      }

      render() {

        return <WrappedComponent loggedIn={this.props.loggedIn}
        {...this.props} />
      }
    }

    const mapStateToProps = state => {
      return {
        loggedIn: state.loggedIn
      }
    }

    const mapDispatchToProps = {
      setCurrentUser: getCurrentUserAction
    }

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(Something))
}
